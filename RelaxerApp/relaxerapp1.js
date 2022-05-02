
let text = document.getElementById('text');

let container = document.querySelector('.container');

let allTime = 7500;
let breathTime = (allTime / 5) * 2;
let holdTime = allTime / 5;

breathAnimation();

function breathAnimation () {


    text.innerText = 'Breath In';
    container.className = 'container grow';

    setTimeout(() => {

        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breath Out';
            container.className = 'container shrink';
        },holdTime);
    },breathTime)











    // text.innerText = 'Breath In';
    // container.className = 'container grow';
    // setTimeout(() => {
    //     text.innerText = 'Hold';

    //     setTimeout(() => {
    //         text.innerText = 'Breath Out';
    //         container.className = 'container shrink';
    //     },holdTime);
    // },breathTime);


};

setInterval(breathAnimation,allTime);