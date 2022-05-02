const imgs = document.querySelector('.image-container');
const left = document.getElementById('left');
const right = document.getElementById('right');

const img = document.querySelectorAll('.image-container img');

let numCount = 0;

let interval = setInterval(run,2000);

function run () {

    numCount++;

    changeImage();

}

function changeImage () {

    if (numCount > img.length - 1) {
        numCount = 0
    } else if (numCount < 0) {
        numCount = img.length - 1;
    }

    imgs.style.transform = `translateX(${-numCount*500}px)`


}

function resetInterval () {

    clearInterval(interval);

    interval = setInterval(run,2000);

}

right.addEventListener('click', (et) => {

    et.preventDefault();

    numCount++;
    changeImage();
    resetInterval();
})

left.addEventListener('click', (ed) => {
    ed.preventDefault();

    numCount--;
    changeImage();
    resetInterval();
})