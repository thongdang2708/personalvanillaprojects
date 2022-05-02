const container = document.querySelector('.container');
const rows = 10;

for (let i=1; i<=rows*3;i++) {
    let img = document.createElement('img');
    img.classList.add('image');
    img.src = 'https://source.unsplash.com/random/' + `${getRandomSize()}`;
    container.appendChild(img);
}


function getRandomSize () {


    return `${getRandomNumberOne()}x${getRandomNumberTwo()}`

}





function getRandomNumberTwo () {
    return Math.floor(Math.random() * 10) + 300;
}



function getRandomNumberOne () {

    return Math.floor(Math.random()*10) + 300;
}