const imgs = document.getElementById('imgs');
const left = document.getElementById('left');
const right = document.getElementById('right');

const img = document.querySelectorAll('#imgs img');
console.log(img);
let idx = 0;

let interval = setInterval(run, 2000);


function run () {

    idx++;

    changeImage();

}

function changeImage () {

    if (idx > img.length - 1) {
        idx = 0;
    } else if (idx < 0) {
        idx = img.length - 1;
    }

    imgs.style.transform = `translateX(${-idx*500}px)`
   

}

function resetInterval () {

    clearInterval(interval);

    interval = setInterval(run, 2000);


}

right.addEventListener('click', (et) => {
    et.preventDefault();
    idx++
    changeImage();
    resetInterval();
})

left.addEventListener('click', (or) => {
    or.preventDefault();

    idx--;
    changeImage();
    resetInterval();
})


