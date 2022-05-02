let testimonial_container = document.querySelector('.testimonial-container');
let idx = 0;


fetchDom();
setInterval(fetchDom,10000);

async function fetchDom () {

    let res = await fetch('testimonialbox.json');

    let data = await res.json();


    let { name, position, photo, text} = data[idx];

    testimonial_container.innerHTML = `
    <div class="progress-bar"> </div>

    <div class="fas fa-quote-right fa-quote"> </div>

    <div class="fas fa-quote-left fa-quote"></div>

    <p class="testimonial">
       ${text};
    </p>


    <div class="user">
        <img src="${photo}" alt="user" class="user-image">

        <div class="user-details">
            <h4 class="username"> ${name} </h4>
            <p class="role"> ${position} </p>
        </div>


    </div>
    
    `

    idx++;

    if (idx > data.length - 1) {
        idx = 0;
    }

    

}