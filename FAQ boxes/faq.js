const buttons = document.querySelectorAll('.button');


buttons.forEach(button => {
    button.addEventListener('click', (ed) => {
        ed.preventDefault();

        button.parentNode.classList.toggle('active');
    })
})