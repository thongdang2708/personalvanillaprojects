let main = document.querySelector('.main');
let array = [1,2,3]
fetch();
function fetch () {

    array.forEach(number => {
        main.innerHTML = `
        <div class='repos'>
            ${number}
        </div>
        `
    })
   
    newDiv();
}



function newDiv () {
    let repos = document.querySelector('.repos');

    repos.innerText = 'Thong';
}