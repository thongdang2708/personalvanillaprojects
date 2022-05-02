const hamburger = document.querySelector('.hamburger');
const left = document.getElementById('left');
const right = document.getElementById('right');
const number = document.querySelector('.number');


let arrayrong = [];
let idx = 1;
showNumberOne()
function showNumberOne () {

    number.innerText = 1;
    let newDiv = document.createElement('div');
    newDiv.classList.add('ingredient');
    arrayrong.push(newDiv);
    addToDom();
}

left.addEventListener('click', (et) => {
    et.preventDefault();

    idx--;
    number.innerText = idx;
    if (idx === 0) {
        arrayrong = [];
        left.disabled = true;
        number.innerText = 0;
        addNewDom();
    } else {
        arrayrong.splice(idx,1);
        left.disabled = false;
        addNewDom();
    }
})

function addNewDom () {
    hamburger.innerHTML = '';
    arrayrong.forEach(info => {
        hamburger.appendChild(info);
    })
}



right.addEventListener('click', (ed) => {
    ed.preventDefault();

    idx++;
    left.disabled = false;
    number.innerText = idx;

    let newDiv = document.createElement('div');
    newDiv.classList.add('ingredient');
    
    arrayrong.push(newDiv);
   
    addToDom();

})

function addToDom () {
    arrayrong.forEach(info => {
        hamburger.appendChild(info);
    })
}


