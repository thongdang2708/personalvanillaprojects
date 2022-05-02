let imgs = document.getElementById('imgs');
let leftBtn = document.getElementById('left');
let rightBtn = document.getElementById('right');
let allimgs = document.querySelectorAll('.image-container img');

console.log(allimgs);
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

    imgs.style.transform = `translateX(${-idx*500}px)`;

}

function resetInterval () {

    clearInterval(interval);

    interval = setInterval(run,2000);


}

rightBtn.addEventListener('click', function (ed) {
    ed.preventDefault();
    idx++;
    changeImage();
    resetInterval();
})

leftBtn.addEventListener('click', function (er) {
    er.preventDefault();

    idx--;
    changeImage();
    resetInterval();
})