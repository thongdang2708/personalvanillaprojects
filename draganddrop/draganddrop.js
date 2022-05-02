let richestPeople = [
    'Mark Zurkenberg',
    'Ibrahimovic',
    'Ronaldo',
    'Messi',
    'Neymar',
    'Freaky',
    'Hanh Or',
    'MCK',
    'Lil Pump'
];

let draggable_list = document.querySelector('.draggable-list');
let itemList = [];
let dragStartIndex;

displayItems();

function displayItems() {

    [...richestPeople]
    .map(a => ({ value: a, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value)
        .forEach((person, index) => {
            let li = document.createElement('li');
            li.setAttribute('data-index', `${index}`);

            li.innerHTML = `
            <span class='number'>  ${index}         </span>
            <div class='draggable' draggable="true">
            <p class="person-name">     ${person}        </p>
            <i class="fas fa-grip-lines"> </i>
            </div>
`
            itemList.push(li);
            draggable_list.appendChild(li);
        })


    addEventListener();
};

function addEventListener() {

    let allDrags = document.querySelectorAll('.draggable')

    let allDragLi = document.querySelectorAll('.draggable-list li');

    allDrags.forEach(draggable => {

        draggable.addEventListener('dragstart', dragStart);



    });


    allDragLi.forEach(li => {


        li.addEventListener('dragover', dragOver);
        li.addEventListener('drop', dragDrop);
        li.addEventListener('dragenter', dragEnter);
        li.addEventListener('dragleave', dragLeave);


    })

};

function dragStart() {

    dragStartIndex = this.closest('li').getAttribute('data-index');

};

function dragOver(e) {

    e.preventDefault();

};

function dragDrop() {

    this.classList.remove('over');

    let dragEndIndex = this.getAttribute('data-index');

    swapIndex(dragStartIndex, dragEndIndex);

};

function swapIndex(startindex, endindex) {

    let itemOne = itemList[startindex].querySelector('.draggable');
    let itemTwo = itemList[endindex].querySelector('.draggable');

    itemList[startindex].appendChild(itemTwo);
    itemList[endindex].appendChild(itemOne);


}

function dragEnter(ed) {

    ed.preventDefault();

    this.classList.add('over');

};


function dragLeave() {

    this.classList.remove('over');

};

document.getElementById('check').addEventListener('click', () => {

    itemList.forEach((item, index) => {

        let person_name = item.querySelector('.person-name').innerText.trim();

        if (person_name != richestPeople[index]) {
            item.classList.add('wrong');
        } else {
            item.classList.remove('wrong');
            item.classList.add('right');
        }

    })

});