let form = document.getElementById('form');
let search = document.getElementById('search');
let button = document.getElementById('button');
let result = document.getElementById('result');
let more = document.getElementById('more');


form.addEventListener('submit', function (ed) {
    ed.preventDefault();

    let text = search.value.trim().toLowerCase();

    if (text === '') {
        alert('Please fill again!');
        search.value = '';
    } else {
        search.value = '';
        fetchSongsAndArtists(text);
    }
})

async function fetchSongsAndArtists (text) {
    result.innerHTML = '';
    more.innerHTML = '';
    let res = await fetch('https://api.lyrics.ovh/suggest/' + text);

    let data = await res.json();

    addFunctionToShowData(data);
}

function addFunctionToShowData (data) {

    let output = '';
    data.data.forEach(infor => {

        output += `
        <li>
        <span> <strong>  ${infor.artist.name}           </strong>  -  ${infor.title}          </span>

        <button class="btn" data-artist="${infor.artist.name}" data-title="${infor.title}">    Get Lyrics                </button>

        </li>
        
        `

    })

    result.innerHTML =`
    <ul class="songs">
    ${output}
    </ul>
    
    `

    if (data.prev || data.next) {
        more.innerHTML = `
        ${data.prev? `<button class='btn-prev' onclick="getMoreSongs('${data.prev}')">    Prev              </button>` : ''}
        ${data.next? `<button class='btn-next' onclick="getMoreSongs('${data.next}')">    Next              </button>` : ''}
        `
    } else {
        more.innerHTML = '';
    }

    getLyrics();

}

function getLyrics () {

    let allButtons = document.querySelectorAll('.btn');

    allButtons.forEach(button => {
        button.addEventListener('click', function (erd) {
            erd.preventDefault();

            let data_artist = button.getAttribute('data-artist');
            let data_title = button.getAttribute('data-title');

            fetchLyrics(data_artist,data_title);
            
        })
    })
}

async function fetchLyrics(artist,title) {
    result.innerHTML = '';
    more.innerHTML = '';
    let res = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);

    let data = await res.json();

    let lyricText = data.lyrics.replace(/\r|\n|\r\n/g,`<br>`);

    result.innerHTML = `
    <h1>  ${title}    </h1>
    ${lyricText}
    `


}

function getMoreSongs (url) {

    console.log(url);
}









































































// let form = document.getElementById('form');
// let search = document.getElementById('search');
// let button = document.getElementById('button');
// let result = document.getElementById('result');
// let more = document.getElementById('more');
// form.addEventListener('submit', function (ed) {
//     ed.preventDefault();

//     let text = search.value.trim().toLowerCase();

//     if (text === '') {
//         alert('Please fill again!');
//         search.value = '';
//     } else {
//         search.value = '';
//         fetchSongsAndArtists(text);
//     }
// }) 

// async function fetchSongsAndArtists (text) {
//     result.innerHTML = '';
//     let res = await fetch('https://api.lyrics.ovh/suggest/' + text);

//     let data = await res.json();

//     addFunctionToShowData(data);

// }

// function addFunctionToShowData(data) {
    
//     data.data.forEach(infor => {

//         let ul = document.createElement('ul');
//         ul.classList.add('songs');
//         let li = document.createElement('li');
//         li.classList.add('song-Els');
//         li.innerHTML = `
//         <span>  <strong>  ${infor.artist.name}          </strong>  - ${infor.title}      </span>

//         <button class='btn' data-artist='${infor.artist.name}' data-title='${infor.title}'>    Get Lyrics                       </button>
        
//         `

//         ul.appendChild(li);
//         result.appendChild(ul);

//     })

//     if (data.prev || data.next) {
//         more.innerHTML = `
//         ${data.prev? `<button class='btn-prev' onclick="getMoreSongs('${data.prev}')">   Prev       </button>` : ''}
//         ${data.next? `<button class='btn-next' onclick="getMoreSongs('${data.next}')">    Next       </button>` : ''}
//         `
//     } else {
//         more.innerHTML = '';
//     }
 
//     getLyricsFunction();
// }

// function getLyricsFunction () {

//     let allLyricButtons = document.querySelectorAll('.btn');

//     allLyricButtons.forEach(lyricbutton => {
//         lyricbutton.addEventListener('click', function (ert) {
//             ert.preventDefault();

//             let data_artist = lyricbutton.getAttribute('data-artist');
//             let data_title = lyricbutton.getAttribute('data-title');

//             addLyricsToDom(data_artist,data_title);
//         })
//     })

// }

// async function addLyricsToDom (artist,title) {

//     result.innerHTML = '';
//     more.innerHTML = '';

//     let res = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);

//     let data = await res.json();

//     let lyricText = data.lyrics.replace(/\r|\n|\r\n/g,`<br>`);

//     result.innerHTML = `
//         <h2>    ${title}            </h2>
//         ${lyricText};
//     `



// }

// async function getMoreSongs (url) {

//     let res = await fetch(`https://red-wave-c10f.myworkerpath.workers.dev/corsproxy/?apiurl=${url}`);

//     let data = await res.json();

//     console.log(data);
// }