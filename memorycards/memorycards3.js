
let card_container = document.getElementById('card-container');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let content = document.getElementById('content');
let plus = document.getElementById('plus');
let hide = document.getElementById('hide');
let add_container = document.getElementById('add-container');
let question = document.getElementById('question');
let answer = document.getElementById('answer');
let add_card = document.getElementById('add-card');
let clear = document.getElementById('clear');

let currentActiveCard = 0;

let cardEls = [];

let checkStorage = JSON.parse(localStorage.getItem('card'));

let cardsData = localStorage.getItem('card') !== null ? checkStorage : [];

createCards();

function createCards () {

    cardsData.forEach((card,index) => createCard(card,index));

}

function createCard (card,index) {

    let kortti = document.createElement('div');
    kortti.classList.add('card');

    if (index === 0) {
        kortti.classList.add('active');
    }

    kortti.innerHTML = `
    
  

        <div class="inner-card">
                <div class="inner-card-front">
                    <p> ${card.question} </p>
                </div>

                <div class="inner-card-back">
                    <p> ${card.answer} </p>
                </div>

         </div>


    `

    kortti.addEventListener('click', () => {
        kortti.classList.toggle('show-answer');
    })


    cardEls.push(kortti);
    card_container.appendChild(kortti);


    updateText();


}

function updateText () {

    content.innerText = `${currentActiveCard + 1} / ${cardEls.length}`;

}

next.addEventListener('click', () => {

    cardEls[currentActiveCard].className = 'card left';

    currentActiveCard++;

    if (currentActiveCard > cardEls.length - 1) {
        currentActiveCard = cardEls.length - 1
    }

    cardEls[currentActiveCard].className = 'card active';

    updateText();
})

prev.addEventListener('click', () => {

    cardEls[currentActiveCard].className = 'card right';

    currentActiveCard--;

    if (currentActiveCard < 0) {
        currentActiveCard = 0;
    }

    cardEls[currentActiveCard].className = 'card active';
    updateText();
});

plus.addEventListener('click', () => {

    add_container.classList.add('active');
    
});

hide.addEventListener('click', () => {

    add_container.classList.remove('active');
    
});

add_card.addEventListener('click', () => {

    let questionEl = question.value.trim();

    let answerEl = answer.value.trim();

    if (questionEl === '' || answerEl === '') {
        alert('Please fill again!')
    } else {

        let newInstance = {
            question: questionEl,
            answer: answerEl,
        };

        cardsData.push(newInstance);

        question.value = '';
        answer.value = '';

        localStorage.setItem('card',JSON.stringify(cardsData));
        location.reload();


    }
    


});

clear.addEventListener('click', () => {

    localStorage.clear();

    card_container.innerHTML = '';

    location.reload();
});










