
let form = document.getElementById('form');
let search = document.getElementById('search');
let random = document.getElementById('random');
let result_heading = document.getElementById('result-heading');
let meals = document.getElementById('meals');
let single_meal = document.getElementById('single-meal');

form.addEventListener('submit', async function (jm) {
    jm.preventDefault();

    let text = search.value.trim().toLowerCase();

    if (text === '') {
        alert('Please fill again!');
    } else {

        let res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + text);
        let data = await res.json();

        meals.innerHTML = '';
        addToDom(data);
        search.value = '';
    }


})

function addToDom (data) {

    let text = search.value.trim().toLowerCase();

    if (data.meals === null) {
        result_heading.innerHTML = `<h2>     There are no results for this type of food!       </h2>`
    } else {
        result_heading.innerHTML = `<h2>    Search results for ${text} :           </h2>`

        data.meals.forEach(meal => {

            let cuisine = document.createElement('div');
            cuisine.classList.add('meal');
            cuisine.setAttribute('idMeal',`${meal.idMeal}`)
            cuisine.innerHTML = `
            <div class='meal-image'>
                <img src="${meal.strMealThumb}" alt="">
            </div>

            <div class='meal-info'>
                <strong>    ${meal.strMeal}        </strong>
            </div>
            
            
            `
            meals.appendChild(cuisine);

        })


    }

    clickToShowDetail();

}

function clickToShowDetail () {

    let allmeals = document.querySelectorAll('.meal');

    allmeals.forEach(eachmeal => {
        
        eachmeal.addEventListener('click', function (eth) {
            eth.preventDefault();

            let idMeal = eachmeal.getAttribute('idMeal');

            single_meal.innerHTML = '';
            fetchSingleMeal(idMeal);
        })
    })

}

async function fetchSingleMeal(idMeal) {

    let res = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + idMeal);

    let data = await res.json();

    addListToDom(data);

}

function addListToDom (data) {
  
    if (data.meals === null) {
        single_meal.innerHTML = `<h2>  No Information Here!             </h2>`
    } else {


        let meal = data.meals[0];

        let ingredients = [];

        for (let i=1;i<=20;i++) {
            if (meal[`strIngredient${i}`] !== '' || meal[`strMeasure${i}`] !== '') {
                ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
            }
        }
    

        single_meal.innerHTML =  `
        <div class='food-name'>  
            <small>    ${meal.strMeal}       </small>
        </div>

        <div class='food-type'>    ${meal.strCategory? `<p> ${meal.strCategory}</p>` : ''}                     </div>

        <div class='food-area'>    ${meal.strArea? `<p>  ${meal.strArea}     </p>` : ''}                         </div>
        
        <ul class='list-type'>

            ${ingredients.map(ingredient => `<li>   ${ingredient}     </li>`).join('')}

        </ul>
        
        `
    


    }




}

