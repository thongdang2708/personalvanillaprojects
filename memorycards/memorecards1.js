
let card_container = document.getElementById('card-container');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let content = document.getElementById('content');
let plus = document.getElementById('plus');
let hide = document.getElementById('hide');
let add_container = document.getElementById('add-container');
let add_card = document.getElementById('add-card');
let question = document.getElementById('question');
let answer = document.getElementById('answer');

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

    kortti.addEventListener('click', function (ed) {
        ed.preventDefault();

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
        currentActiveCard = cardEls.length - 1;
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
});

plus.addEventListener('click', function (el) {
    el.preventDefault();

    add_container.classList.add('show');

});

hide.addEventListener('click', function (eh) {
    eh.preventDefault();

    add_container.classList.remove('show');
});

add_card.addEventListener('click', function (tu) {
    tu.preventDefault();

    let questionValue = question.value.trim();

    let answerValue = answer.value.trim();

    if (questionValue === '' || answerValue === '') {
        alert('please fill again!');
    } else {

        let listValue  = {
            question: questionValue,
            answer: answerValue
        }

        cardsData.push(listValue);

        localStorage.setItem('card',JSON.stringify(cardsData));

        question.value = '';
        answer.value = '';
        location.reload();
    }

});


document.getElementById('clear').addEventListener('click', () => {

    localStorage.clear();
    card_container.innerHTML = '';
    location.reload();
})







