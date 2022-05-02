let imgs = document.getElementById('imgs');
let allimgs = document.querySelectorAll('.image-container img');
let left = document.getElementById('left');
let right = document.getElementById('right');

let idx = 0;
let interval = setInterval(run,2000);

function run () {

    idx++;

    changeImage();
}

function changeImage () {

    if (idx > allimgs.length - 1) {
        idx = 0;
    } else if (idx < 0) {
        idx = allimgs.length - 1;
    }

    imgs.style.transform = `translateX(${-idx*500}px)`


}

function resetInterval () {

    clearInterval(interval);

    interval = setInterval(run,2000);

}

right.addEventListener('click', function (ed) {
    idx++;
    changeImage();
    resetInterval();
})

left.addEventListener('click', function (et) {
    idx--;
    changeImage();
    resetInterval();
})