

let quiz = document.getElementById('quiz');
let question_El = document.getElementById('question');
let quiz_list = document.querySelector('.quiz-list');
let submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

fetchDom();

async function fetchDom () {
    quiz_list.innerHTML = '';
    let res = await fetch('quizapp.json');

    let data = await res.json();

    let { question } = data[currentQuiz];

    question_El.innerText = question;

    let valuesOfObject = Object.entries(data[currentQuiz]);

    valuesOfObject.forEach((value,index) => {

        if (value.includes('question') === true || value.includes('correct') === true) {
            valuesOfObject.splice(index,1);
        }
    })

    valuesOfObject.forEach(value => {

        let li = document.createElement('li');
        li.innerHTML = `
        <input type="radio" name="answer" class="answer" id="${value[0]}" value="${value[0]}">
        <label for="${value[0]}" id="${value[0]}_text">  ${value[1]}            </label>       
        `

        quiz_list.appendChild(li);
    })

    deselectAnswer();
    selectAnswer();
}

function deselectAnswer () {

    let answer_Els = document.querySelectorAll('.answer');

    answer_Els.forEach(answerEl => {
        answerEl.checked = false;
    })
}

function selectAnswer () {


    let value;

    let answer_Els = document.querySelectorAll('.answer');

    answer_Els.forEach(answer => {
        if (answer.checked) {
            value = answer.id;
        }
    })

    return value;


}

submit.addEventListener('click', async function (ed) {
    ed.preventDefault();

    let result = selectAnswer();

    let res = await fetch('quizapp.json');

    let data = await res.json();

    if (result) {
        if (result === data[currentQuiz].correct) {
            score++
        }

        currentQuiz++;

        if (currentQuiz < data.length) {
            fetchDom();
        } else {
            quiz.innerHTML = `
            <h2>   Your score is: ${score} / ${data.length}         </h2>
            

            <button id="submit" onclick="location.reload()">    Reload         </button>
            `
        }
    }
})
































// let quiz = document.getElementById('quiz');
// let quiz_list = document.querySelector('.quiz-list');
// let submit = document.getElementById('submit');
// let question_El = document.getElementById('question');
// let currentQuiz = 0;
// let score = 0;

// fetchDom();

// async function fetchDom () {
//     quiz_list.innerHTML = '';
//     let res = await fetch('quizapp.json');

//     let data = await res.json();

//     let { question } = data[currentQuiz];

//     question_El.innerText = question;
    
//     let exportToValues = Object.entries(data[currentQuiz]);

//     exportToValues.forEach((value,index)=> {
        
//         if (value.includes('question') === true || value.includes('correct') === true) {
//             exportToValues.splice(index,1);
//         }
//     })
//     console.log(exportToValues);

//     exportToValues.forEach(value => {
        
//         let li = document.createElement('li');
//         li.innerHTML = `
//         <input type="radio" name="answer" class="answer" id="${value[0]}" value="${value[0]}">
//         <label for="${value[0]}" id="${value[0]}_text">  ${value[1]}      </label>
//         `
//         quiz_list.appendChild(li);
//     })
//     deselectAnswer();
//     selectAnswer();
// }

// function deselectAnswer () {


//     let answer_Els = document.querySelectorAll('.answer');

//     answer_Els.forEach(answerEl => {
//         answerEl.checked = false
//     })

// }

// function selectAnswer () {

//     let value;

//     let answer_Els = document.querySelectorAll('.answer');

//     answer_Els.forEach(answerEl => {
//         if (answerEl.checked) {
//             value = answerEl.id
//         }
//     })

//     return value;

// }

// submit.addEventListener('click', async function (ed) {
//     ed.preventDefault();

//     let result = selectAnswer();

//     let res = await fetch('quizapp.json');

//     let data = await res.json();

//     if (result) {
//         if (result === data[currentQuiz].correct) {
//             score++
//         }

//         currentQuiz++

//         if (currentQuiz < data.length) {
//             fetchDom();
//         } else {
//             quiz.innerHTML = `
//             <h2>  Your score is: ${score} / ${data.length}          </h2>
//             <button id="submit" onclick="location.reload()">    Reload        </button>
//             `
//         }
//     }
    
// })
