let form = document.getElementById('form');
let search = document.getElementById('search');
// let card = document.querySelector('.card');
let main = document.getElementById('main');



form.addEventListener('submit', function (ed) {
    ed.preventDefault();
    main.innerHTML = '';
    let text = search.value.trim().toLowerCase();

    if (text === '') {
        let card = document.createElement('card');
        card.classList.add('card');
        card.innerHTML = `<p> There is no result! Please fill again!     </p>`
        main.appendChild(card);
        search.value = '';
        
    } else {
        getUsername(text);
        search.value = '';
    }


});

async function getUsername (text) {
    main.innerHTML = '';
    try {

        let res = await axios('https://api.github.com/users/' + text);

        addFunctionToDom(res.data);
        getRepos(text);

    } catch (err) {
        if (err.response.status === 404) {
            createError('Error to display user information')
        }
    }

}

function createError (msg) {
    let card = document.createElement('card');
    card.classList.add('card');
    card.innerHTML = `
    <p>   ${msg}   </p>
    `
    main.appendChild(card);
}

function addFunctionToDom (data) {
    let card = document.createElement('card');
    card.classList.add('card');
    card.innerHTML = `
    <div>
            <img src="${data.avatar_url}" alt="" class="avatar">
        </div>

        <div class="user-info">
            <h2> ${data.name} </h2>
            <p> ${data.bio} </p>

            <ul class="list">
                <li> ${data.followers} <strong> Followers </strong></li>
                <li> ${data.following} <strong> Followings </strong></li>
                <li> ${data.public_repos} <strong> Public Repos </strong></li>
            </ul>

            <div class="repos">
            </div>

        </div>
    
    `
    main.appendChild(card);


}

async function getRepos (text) {

    try {

        let res = await axios(`https://api.github.com/users/${text}/repos?sort=created`)

        displayRepos(res.data);

        console.log(res.data);


    } catch (err) {
        if (err.response.status === 404) {
            createError('Error to display repos!')
        }
    }


}

function displayRepos (data) {

    let repos = document.querySelector('.repos');

    data.slice(0,10).forEach(info => {


        let a = document.createElement('a');
        a.classList.add('repo');
        a.href = `${info.html_url}`;
        a.target = '_blank';
        a.innerText = `${info.name}`;

        repos.appendChild(a);
    })


}