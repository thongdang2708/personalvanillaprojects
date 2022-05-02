let form = document.getElementById('form');
let search = document.getElementById('search');
let card = document.querySelector('.card');
let user_info = document.querySelector('.user-info');
let repos = document.querySelector('.repos');



let url = 'https://api.github.com/users/bradtraversy';


form.addEventListener('submit',onSubmit);

function onSubmit (et) {
    et.preventDefault();

    let searchInfo = search.value.trim();

    if (searchInfo) {
        linkInfoToDom(searchInfo);
        addRepos(searchInfo);
        search.value = '';
    } 


}

async function linkInfoToDom (searchInfo) {

    try {

        let { data } = await axios('https://api.github.com/users/' + searchInfo);

        addData(data);
    
        

    } catch (err) {
        if (err.response.status == 404) {
            createFaultCard('There is no user with this name!')
        }

    }



}

function addData (data) {

    card.innerHTML = `
    <img src="${data.avatar_url}" alt="" class="avatar">
      
        
    <div class="user-info">
        <h2> ${data.name ? data.name : ''} </h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam iusto mollitia error iste, modi eius!</p>

        <ul class="list">
            <li>  ${data.followers} <strong> Followers</strong></li>
            <li> ${data.following} <strong> Following </strong></li>
            <li> ${data.public_repos} <strong> Repos</strong></li>
        </ul>

        <div class="repos">
        </div>
    </div>

    
    `
}


async function addRepos (searchInfo) {
   
    try {
        let { data } = await axios('https://api.github.com/users/' + searchInfo + '/repos?sort=created');

        linkReposToDom(data);
        
    } catch (err) {
        if (err.response.status == 404) {
            createFaultCard('There is no user with this name!')
        }
    }


}

function createFaultCard (msg) {

    card.innerHTML = `
    
    <h1>   ${msg}         </h1>
    `




}




function linkReposToDom (data) {

    let repos = document.querySelector('.repos');

    data.slice(0, 10).forEach(info => {

        let repoEl = document.createElement('a');

        repoEl.classList.add('repo');
        repoEl.href = `${info.html_url}`;
        repoEl.target = '_blank';
        repoEl.innerText = `${info.name}`;

        repos.appendChild(repoEl);
    });



}

