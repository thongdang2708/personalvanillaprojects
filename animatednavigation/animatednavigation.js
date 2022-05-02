
let nav = document.getElementById('nav');
let toggle = document.getElementById('toggle');

toggle.addEventListener('click', function (et) {
    et.preventDefault();

    nav.classList.toggle('active');
})