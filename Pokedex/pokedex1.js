
let colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#f5f5f5',
    fighting: '#e6e0d4',
    normal: '#f5f5f5',
}

let types = Object.keys(colors);

let poke_container = document.getElementById('poke-container');

let pokemon_count = 150;

getPokemon();
async function getPokemon () {

    for (let i=1; i<=200; i++) {
        await fetchPokemon(i);
    }

}

async function fetchPokemon (i) {

    let res = await fetch('https://pokeapi.co/api/v2/pokemon/' + i);
    let data = await res.json();

    addFunctionToDom(data,i);

}

function addFunctionToDom (data,i) {

    let pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');

    let name = data.name.charAt(0).toUpperCase() + data.name.substring(1);

    let id = data.id.toString().padStart(3,'0');

    let data_types = data.types.map(type => type.type.name);

    let type = data_types.find(type => types.indexOf(type) > -1);
    let color = colors[type];

    pokemon.style.backgroundColor = `${color}`;

    pokemon.innerHTML = `
    <div class="img-container">
        <img src="https://cdn.traction.one/pokedex/pokemon/${i}.png" alt="" class="img">
    </div>
        
    <div class="info">
        <span class="number"> #${id} </span>
        <h1 class="name"> ${name} </h1>
        <small class="type"> Type: <span> ${type? type : 'unknown'} </span></small>
    </div>
    `

    poke_container.appendChild(pokemon);






}
