
const richestPeople = [
    'Jeff Bezos',
    'Bill Gates',
    'Warren Buffett',
    'Bernard Arnault',
    'Carlos Slim Helu',
    'Amancio Ortega',
    'Larry Ellison',
    'Mark Zuckerberg',
    'Michael Bloomberg',
    'Larry Page'
];

let draggable_list = document.getElementById('draggable-list');
let check = document.getElementById('check');
let itemList = [];
let dragStartIndex;
displayItems();

function displayItems () {

    [...richestPeople]
    .map(a => ({value: a, sort: Math.random()}))
    .sort((a,b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((rich,index) => {
        let li = document.createElement('li');

        li.setAttribute('data-index',`${index}`);
        li.innerHTML = `
        <span class="number">   ${index + 1}            </span>

        <div class="draggable" draggable="true">
        <p class="person-name">   ${rich}      </p>
        <i class="fas fa-grip-lines">       </i>
        </div>
        
        `;

        draggable_list.appendChild(li);
        itemList.push(li);
    })

    addEventListener();
};

function addEventListener() {

    let allDraggables = document.querySelectorAll('.draggable');
    let allLis = document.querySelectorAll('.draggable-list li');

    allDraggables.forEach(draggable => {
        draggable.addEventListener('dragstart',dragStart);
    });

    allLis.forEach(li => {
        li.addEventListener('dragover',dragOver);
        li.addEventListener('drop',dragDrop);
        li.addEventListener('dragenter',dragEnter);
        li.addEventListener('dragleave',dragLeave);
    })

}

function dragStart () {

    dragStartIndex = +this.closest('li').getAttribute('data-index');
    console.log(dragStartIndex);
};

function dragOver (e) {
    e.preventDefault();

};

function dragDrop () {

    let dragEndIndex = +this.getAttribute('data-index');

    swapIndex(dragStartIndex,dragEndIndex);

    this.classList.remove('over');
};

function swapIndex(dragStartIndex,dragEndIndex) {
    let itemOne = itemList[dragStartIndex].querySelector('.draggable');
    let itemTwo = itemList[dragEndIndex].querySelector('.draggable');

    itemList[dragStartIndex].appendChild(itemTwo);
    itemList[dragEndIndex].appendChild(itemOne);
}

function dragEnter () {
   

    this.classList.add('over');

};

function dragLeave () {

    this.classList.remove('over');  
};

check.addEventListener('click',checkOrder);

function checkOrder (et) {
    et.preventDefault();
    itemList.forEach((item,index) => {

        let person_name = item.querySelector('.draggable').innerText.trim();

        if (person_name != richestPeople[index]) {
            item.classList.add('wrong');
        } else {
            item.classList.add('right');
        }
    })



}





