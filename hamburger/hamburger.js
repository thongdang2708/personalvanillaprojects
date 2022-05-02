const hamburger = document.querySelector('.hamburger');
const left = document.getElementById('left');
const right = document.getElementById('right');
let text = document.querySelector('.text');



let arrayrong = [];

let numCount = 1
addVege();
function addVege () {
    text.innerText = numCount;
}


right.addEventListener('click', (et) => {
        et.preventDefault();

        numCount++;
        addVege();
        addDom();
})

left.addEventListener('click', (ed) => {
        ed.preventDefault();

        numCount--;
        console.log(numCount);
        if (numCount == 0) {
            numCount = 0;
            addVege();
            arrayrong= [];
            addNewDom();
        } 
        addVege();

        arrayrong.splice(numCount,1);
        console.log(arrayrong);
        addNewDom();
    
})


function addNewDom () {
    hamburger.innerHTML = '';

    arrayrong.forEach(info => {
        hamburger.appendChild(info);
    })
}




function addDom () {

    
    let object = document.createElement('div');
    object.classList.add('ingredient');
    arrayrong.push(object);
    addNext();
}


function addNext () {
    
    arrayrong.forEach(info => {
        hamburger.appendChild(info);
    })

}