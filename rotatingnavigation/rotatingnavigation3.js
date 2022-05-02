
let open = document.getElementById('open');
let close = document.getElementById('close');
let container = document.querySelector('.container');

open.addEventListener('click', function (ed) {
    ed.preventDefault();

    container.classList.add('show-nav');
})

close.addEventListener('click', function (ed) {
    ed.preventDefault();

    container.classList.remove('show-nav');
})