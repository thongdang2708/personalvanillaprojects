
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', fixBar);

fixBar();

function fixBar () {

    

    if (window.scrollY > navbar.offsetHeight + 100) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }



}
