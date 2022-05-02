

let container = document.getElementById('container');
let text = document.getElementById('text');

let totalTime = 7500;
let breathTime = (totalTime / 5) * 2;
let holdTime = totalTime / 5;

breathFunction();

function breathFunction () {

    text.innerText = 'Breath In';
    container.className = 'container grow'
    setTimeout (() => {
        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breath Out';
            container.className = 'container shrink';
        },holdTime);
    },breathTime);
};

setInterval(breathFunction,totalTime);