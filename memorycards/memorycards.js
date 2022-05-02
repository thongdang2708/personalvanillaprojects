

let card_container = document.getElementById('card-container');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let content = document.getElementById('content');
let plusBtn = document.getElementById('plus');
let add_container = document.getElementById('add-container');
let currentActiveCard = 0;
let hideBtn = document.getElementById('hide');
let addCard = document.getElementById('add-card');

let question = document.getElementById('question');
let answer = document.getElementById('answer');
let clearBtn = document.getElementById('clear');



let cardEls = [];

let checkStorage = JSON.parse(localStorage.getItem('card'));

let cardsData = localStorage.getItem('card') !== null ? checkStorage : [];
// [{
//     question: 'What is PHP?',
//     answer: 'A programming language.'
// },{
//     question: 'What is C++?',
//     answer: 'A programming language.'
// },
//     {
//         question: 'What is Java?',
//         answer: 'A programming language.'
//     }
// ]

createCards();
function createCards() {
    cardsData.forEach((data, index) => createCard(data, index));
  }
  
  // Create a single card in DOM
  function createCard(data, index) {
    const card = document.createElement('div');
    card.classList.add('card');
  
    if (index === 0) {
      card.classList.add('active');
    }
  
    card.innerHTML = `
    <div class="inner-card">
    <div class="inner-card-front">
      <p>
        ${data.question}
      </p>
    </div>
    <div class="inner-card-back">
      <p>
        ${data.answer}
      </p>
    </div>
  </div>
    `;
  
    card.addEventListener('click', () => card.classList.toggle('show-answer'));
  
    // Add to DOM cards
    cardEls.push(card);
  
    card_container.appendChild(card);
  
    updateText();
}

function updateText () {

    content.innerText = `${currentActiveCard + 1} / ${cardEls.length}`

}

next.addEventListener('click', function (et) {

    et.preventDefault();

    cardEls[currentActiveCard].className = 'card left';

    currentActiveCard++;

    if (currentActiveCard > cardEls.length - 1) {
        currentActiveCard = cardEls.length - 1;
    }

    cardEls[currentActiveCard].className = 'card active';
    updateText();
})

prev.addEventListener('click', function (ej) {
    ej.preventDefault();

    cardEls[currentActiveCard].className = 'card right';

    currentActiveCard--;

    if (currentActiveCard < 0) {
        currentActiveCard = 0;
}

    cardEls[currentActiveCard].className = 'card active';

    updateText();
})

plusBtn.addEventListener('click',function (ek) {
    ek.preventDefault();

    add_container.classList.add('show');

})

hideBtn.addEventListener('click', function (rep) {
    rep.preventDefault();

    add_container.classList.remove('show');
})

addCard.addEventListener('click', function (etw) {

    etw.preventDefault();

    let questionValue = question.value.trim();
    let answerValue = answer.value.trim();

    if (questionValue === '' || answerValue === '') {
        alert('Please fill information');
    } else {

        let newValue = {
            question: questionValue,
            answer: answerValue
        }

        cardsData.push(newValue);

       

       localStorage.setItem('card',JSON.stringify(cardsData));
        
       question.value = '';
       answer.value = '';

       location.reload();
    }

});


clearBtn.addEventListener('click', () => {

    localStorage.clear();
    card_container.innerHTML = '';
    location.reload();
})








