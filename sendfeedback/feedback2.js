
let ratings = document.querySelectorAll('.rating');
let send = document.getElementById('send');
let textFeedback = 'Neutral';
let panel = document.getElementById('panel');

ratings.forEach(rating => {

    rating.addEventListener('click', function (ed) {
        ed.preventDefault();
        ratings.forEach(rating => {
            rating.classList.remove('active');
        });

        rating.classList.add('active');
        textFeedback = rating.querySelector('small').innerText;
        
    })


})

send.addEventListener('click', function (et) {
    et.preventDefault();

    panel.innerHTML = `
    <i class="fas fa-heart"> </i>
    <strong>   Thank you!   </strong>
    <small>    Your selection is: ${textFeedback}             </small>
    <strong>   We will take care of your review next time!         </strong>
    `
})