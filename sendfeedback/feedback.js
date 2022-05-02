
let ratings = document.querySelectorAll('.rating');
let send = document.getElementById('send');
let ratingContainer = document.querySelector('.rating-container');
let ratingText = 'Neutral';
let panel = document.getElementById('panel');

ratings.forEach(rating => {
  
    rating.addEventListener('click', function (ed) {
        ratings.forEach(ratingEl => {
            ratingEl.classList.remove('active');
        })
        ed.preventDefault();
        console.log(rating);
        rating.classList.add('active');
        ratingText = rating.querySelector('small').innerText;
    })
})

send.addEventListener('click', function (et) {
    et.preventDefault();

    panel.innerHTML = `
    <i class="fas fa-heart"> </i>
    <strong>      Thank you!          </strong>
    <br>
    <strong>   Feedback: ${ratingText}             </strong>
    <p>  We'll use your feedback to improve our customer support!          </p>
    
    `
})

