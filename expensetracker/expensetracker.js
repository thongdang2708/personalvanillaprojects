let balance = document.getElementById('balance');
let money_plus = document.getElementById('money-plus');
let money_minus = document.getElementById('money-minus');
let list = document.getElementById('list');
let text = document.getElementById('text');
let amount = document.getElementById('amount');
let form = document.getElementById('form');

let checkArray = JSON.parse(localStorage.getItem('transaction'));
let emptyArray = localStorage.getItem('transaction') !== null ? checkArray : [];


form.addEventListener('submit', function (ed) {
    ed.preventDefault();

    if (text.value.trim() === '' || amount.value.trim() === '') {
        alert('Please fill information!');
    } else if (emptyArray.some(infor => infor.text == text.value.trim())) {
       emptyArray.map((infor) => {

            if (infor.text == text.value.trim()) {
                infor.amount = infor.amount + Number(amount.value.trim());

            return {
                ...infor,
                amount : infor.amount
            }
            }
            
       })
       
       text.value = '';
       amount.value = '';
       init();
       updateLS();
    }
    else {

        let transaction = {
            id: generateId(),
            text: text.value,
            amount: Number(amount.value),
        }

        emptyArray.push(transaction);
        init();
        text.value = '';
        amount.value = '';
        updateLS();
    }

})


function generateId () {


    return Math.floor(Math.random() * 100000);
}

init();
function init () {
    list.innerHTML = '';

    emptyArray.forEach(infor => addFunctionToDom(infor));
    addTotal();
}

function addTotal () {

    let amount = emptyArray.map(infor => infor.amount);
    
    let totalbalance = amount.reduce((acc,item) => acc+=item, 0);

    let income = amount.filter(a => a > 0).reduce((acc,item) => acc+=item, 0);

    let expense = amount.filter(a => a < 0).reduce((acc,item) => acc+=item,0);

    balance.innerText = totalbalance;
    money_plus.innerText = income;
    money_minus.innerText = expense;

}

function addFunctionToDom (infor) {

    let li = document.createElement('li');
    li.classList.add(`${infor.amount > 0 ? 'plus' : 'minus'}`);

    li.innerHTML = `
    ${infor.text}<span> ${infor.amount}</span><button class="delete-btn" onclick="deleteItems(${infor.id})">x</button>

    `

    list.appendChild(li);
    
}

function deleteItems (id) {

    emptyArray = emptyArray.filter(infor => infor.id !== id);

    init();
    updateLS();
}

function updateLS () {

    localStorage.setItem('transaction',JSON.stringify(emptyArray));
}
