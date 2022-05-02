
let addBtn = document.getElementById('add');

let checkNote = JSON.parse(localStorage.getItem('note'));
let notes = localStorage.getItem('note') !== null ? checkNote : [];

if (notes) {
    notes.forEach(note => addNotes(note));
}

addBtn.addEventListener('click', () => addNotes());

function addNotes (text = '') {

    let note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
    <div class="tools">
            <button class="edit" id="edit"> <i class="fas fa-edit"> </i></button>
            <button class="delete" id="delete"> <i class="fas fa-trash-alt"></i></button>
        </div>

        <div class="main ${text? '' : 'hidden'}"></div>
        <textarea class="${text? 'hidden' : ''}"></textarea>
    `

    let deleteBtn = note.querySelector('.delete');
    let editBtn = note.querySelector('.edit');
    let main = note.querySelector('.main');
    let textArea = note.querySelector('textarea');

    deleteBtn.addEventListener('click', function (ed) {
        ed.preventDefault();

        note.remove();
        updateLS();
    });

    editBtn.addEventListener('click', function (et) {
        et.preventDefault();

        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })

    textArea.value = text;
    main.innerHTML = marked.parse(text);

    textArea.addEventListener('input', function (eth) {
        eth.preventDefault();

        let { value }  = eth.target;

        main.innerHTML = marked.parse(value);

        updateLS();
    })


    document.body.appendChild(note);

}

function updateLS () {

    let textArea = document.querySelectorAll('textarea');

    let notes = [];

    textArea.forEach(note => notes.push(note.value));

    localStorage.setItem('note',JSON.stringify(notes));


}

localStorage.removeItem('note');