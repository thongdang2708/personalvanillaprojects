
let fill = document.querySelector('.fill');
let empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart',dragStart);
fill.addEventListener('dragend', dragEnd);

empties.forEach(empty => {

    empty.addEventListener('dragover',dragOver);
    empty.addEventListener('dragenter',dragEnter);
    empty.addEventListener('dragleave',dragLeave);
    empty.addEventListener('drop',dragDrop);
})

function dragStart () {
    this.className += ' hold';

    setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd () {
    this.className = 'fill';
}

function dragOver (ed) {
    ed.preventDefault();
}

function dragEnter (ert) {
    ert.preventDefault();

    this.className += ' hovered';
}

function dragLeave () {
    this.className = 'empty';
}

function dragDrop () {
    this.className = 'empty';
    this.appendChild(fill);
}