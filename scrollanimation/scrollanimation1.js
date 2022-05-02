let allBoxes = document.querySelectorAll('.content-box');

window.addEventListener('scroll',checkBoxes);

checkBoxes();

function checkBoxes () {

    let triggerBottom = window.innerHeight / 5 * 4;

    allBoxes.forEach(box => {
        
        let topBox = box.getBoundingClientRect().top;

        if (topBox < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show');
        }





    })




}