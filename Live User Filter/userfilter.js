const search = document.getElementById('search');
const result = document.getElementById('result');

showPost();

search.addEventListener('keyup', (et) => {

    et.preventDefault();
    let text = et.target.value.trim().toLowerCase();
    listItems.forEach(item => {

        let textNode = item.querySelector('.user-info').innerText.toLowerCase();

        if (textNode.indexOf(text) > -1) {
            item.style.display = 'flex'
        } else {
            item.style.display = 'none';
        }

    })




})





let listItems = [];
async function showPost () {

    let res = await fetch('https://randomuser.me/api?results=50');

    let data = await res.json();

    let results = data.results;

    if (results.length === 0 || results === null) {
        result.innerHTML = '<h2>    No results        </h2>';
    } else {
        addToDom(results);
        console.log(results);
    }


}

function addToDom (results) {  
    
    result.innerHTML = '';
    results.slice(0,10).forEach(info => {
        let li = document.createElement('li');
        li.classList.add('each-result');
        li.innerHTML = `
        <img src="${info.picture.large}" alt="${info.name.first}">

        <div class="user-info">
            <h4> ${info.name.first}, ${info.name.last}</h4>
            <p> ${info.location.city}, ${info.location.country} </p>
        </div>
        `

        listItems.push(li);

        result.appendChild(li);
    })


}

