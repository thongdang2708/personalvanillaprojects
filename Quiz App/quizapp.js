
// fetchPost();

let currentQuiz = 0;
let score = 0;
const quiz = document.getElementById('quiz');
const question = document.getElementById('question');
const answers = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit = document.getElementById('submit');
const ul = document.querySelector('.question-list');
fetchPost();


async function fetchPost () {
    ul.innerHTML = '';
    let res = await fetch('quizapp.json');

    let data = await res.json();

    let infoOne = data[currentQuiz];

    let keys = Object.keys(infoOne);

    


    question.innerText = infoOne.question;

    // let input = document.createElement('input');
    // input.type = 'radio';
    // input.name = 'answer';
    // for (let i=0; i<cutKeys.length;i++) {
    //     input.id = cutKeys[i];
    // }
    // input.className = 'name'
    // let label = document.createElement('label');
    // for (let i=0; i<cutKeys.length;i++) {
    //     label.setAttribute('for',cutKeys[i]);
    // }

    // for (let i=0; i<cutKeys.length;i++) {
    //     label.id = `${cutKeys[i]}_text`;
    // }

    let newKeys = Object.entries(infoOne);

    let newArrayRong = [];
    newKeys.forEach(key => {
        if (key[0] === 'question' || key[0] === 'correct') {
            newArrayRong.push();
        } else {
            newArrayRong.push(key);
        }
    })


    newArrayRong.forEach(value => {
        let li = document.createElement('li');
        li.classList.add('li');
        li.innerHTML = `
        <input type="radio" name="answer" id="${value[0]}" class="answer" id='name'>
        <label for="${value[0]}" id="${value[0]}_text" id='Mine'> ${value[1]} </label>
        `

      
        ul.appendChild(li);
        
    })
    
   
    let listAnswers = ul.querySelectorAll('.answer');
    deselectAnswer(listAnswers);
    newDiv();
}   

function newDiv () {
    console.log(document.querySelectorAll('.answer'));
}




function deselectAnswer (listAnswers) {
       
    listAnswers.forEach(answerEl => {
        answerEl.checked = false;
    })
}



submit.addEventListener('click', async (ed) => {
    ed.preventDefault();
  
    let allanswers = ul.querySelectorAll('.answer');

    let answer;
    allanswers.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })

    let res = await fetch('quizapp.json');
    
    let data = await res.json();



    if (answer) {
        if (answer === data[currentQuiz].correct) {
            score++
        }

        currentQuiz++;

        if (currentQuiz < data.length) {
            fetchPost();
        } else {
            quiz.innerHTML = `
            <h2>     Your true answer is : ${score} / ${data.length}        </h2>
            <button id='submit' onclick="location.reload()">    Reload            </button>
            
            `
        }
    }
})

 























// async function fetchPost () {

//     let res = await fetch('quizapp.json');

//     let data = await res.json();

//     let info = data[currentQuiz];

//     question.innerText = info.question;
//     a_text.innerText = info.a;
//     b_text.innerText = info.b;
//     c_text.innerText = info.c;
//     d_text.innerText = info.d;
    
//     deselectAnswer();
// }


// function deselectAnswer () {

//     answers.forEach(answerEl => {
//         answerEl.checked = false;
//     })
// }

// function selectAnswer () {

//     let answer;

//     answers.forEach(answerEl => {
//         if (answerEl.checked) {
//             answer = answerEl.id
//         }
//     })

//     return answer;
// }

// submit.addEventListener('click', async (et) => {
//     et.preventDefault();

//     const answer = selectAnswer();

//     let res = await fetch('quizapp.json');

//     let data = await res.json();

    
//     if (answer) {
//         if (answer === data[currentQuiz].correct) {
//             score++
//         }

//         currentQuiz++;

//         if (currentQuiz < data.length) {
//             fetchPost();
//         } else {
//             quiz.innerHTML = `
//             <h2>   Your correct answer is: ${score} / ${data.length}         </h2>
            
//             <button id="submit" onclick="location.reload()">    Reload       </button>
            
//             `
//         }
//     }

// })







































// const quizApp = [{
//     question : "Which language runs in a web browser?",
//     a : "Java",
//     b : "C",
//     c : "Python",
//     d : "Javascript",
//     correct : "d"
// },
// {
//     question : "Which language runs in a server?",
//     a: "Java",
//     b : "C",
//     c : "Python",
//     d : "Javascript",
//     correct : "c"
// },
// {
//     question: "Which language runs hard?",
//     a: "Java",
//     b: "C",
//     c : "Python",
//     d : "Javascript",
//     correct : "b"
// },
// {
//     question : "Which language runs in a game?",
//     a : "Java",
//     b : "C",
//     c : "Python",
//     d : "Javascript",
//     correct : "a"
// }
// ]


// const quiz = document.getElementById('quiz');
// const question = document.getElementById('question');
// const answers = document.querySelectorAll('.answer');
// const a_text = document.getElementById('a_text');
// const b_text = document.getElementById('b_text');
// const c_text = document.getElementById('c_text');
// const d_text = document.getElementById('d_text');
// const submit = document.getElementById('submit');


// let currentQuiz = 0;
// let score = 0
// showPost();
// function showPost () {

//     let data = quizApp[currentQuiz];

//     question.innerText = data.question;
//     a_text.innerText = data.a;
//     b_text.innerText = data.b;
//     c_text.innerText = data.c;
//     d_text.innerText = data.d;

//     deselectAnswer();

// }

// function deselectAnswer () {

//     answers.forEach(answerEl => {
//         answerEl.checked = false;
//     })
// }

// function selectAnswer () {

//     let answer;

//     answers.forEach(answerEl => {
//         if (answerEl.checked) {
//             answer = answerEl.id;
//         }
//     })

//     return answer;
// }

// submit.addEventListener('click', () => {
  

//     const vastaus = selectAnswer();

   
//         if (vastaus === quizApp[currentQuiz].correct) {
//             score++
//         } 

//         currentQuiz++;

//         if (currentQuiz < quizApp.length) {
//             showPost();
//         } else {
//             quiz.innerHTML = `
//             <h2>   Your correct answer is : ${score} / ${quizApp.length}         </h2>
            
//             <button id='submit' onclick="location.reload()">     Reload           </button>
//             `
//         }
    
// })





