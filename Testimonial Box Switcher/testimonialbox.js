
const body = document.body;

let idx = 0;
setInterval(fetchPost,10000);
fetchPost();
async function fetchPost () {

    let res = await fetch('testimonialbox.json');

    let data = await res.json();

    idx++

    if (idx > data.length - 1) {
        idx = 0;
    } else if (idx < 0) {
        idx = data.length - 1;
    }

    let { name, position, photo, text } = data[idx];

    body.innerHTML = `
    <div class="testimonial-container"> 
       <div class="progress-bar"></div>
        <div class="fas fa-quote-right fa-quote"></div>
        <div class="fas fa-quote-left fa-quote"></div>
        <p class="testimonial">
           ${text}
        </p>

        <div class="user">

            <img src="${photo}" alt="user" class="user-image">

            <div class="user-details">
                <h4 class="username"> ${name} </h4>
                <p class="role"> ${position} </p>
            </div>
        </div> 
    </div> 
    
    `

}


















































// const testimonial = document.querySelector('.testimonial');
// const user_image = document.querySelector('.user-image');
// const username = document.querySelector('.username');
// const role = document.querySelector('.role');
// const testimonial_container = document.querySelector('.testimonial-container');
// const body = document.body;

// let idx = 1;
// setInterval(fetchPost,10000);
// fetchPost();
// async function fetchPost () {
    

//     let res = await fetch('testimonialbox.json');

//     let data = await res.json();

//     idx++;

//     if (idx > data.length - 1) {
//         idx = 0;
//     } else if (idx < 0){
//         idx = data.length - 1
//     }

//     let { name, position, photo, text } = data[idx];

//     body.innerHTML = `
//     <div class="testimonial-container">
//      <div class="progress-bar"></div>
//         <div class="fas fa-quote-right fa-quote"></div>
//         <div class="fas fa-quote-left fa-quote"></div>
//         <p class="testimonial">
//            ${text}
//         </p>

//         <div class="user">

//             <img src="${photo}" alt="user" class="user-image">

//             <div class="user-details">
//                 <h4 class="${name}"> Miyah Myles </h4>
//                 <p class="${position}"> Marketing </p>
//             </div>
//         </div>
//     </div>
//     `


    
   

// }











































// const testimonial_container = document.querySelector('.testimonial-container');
// const testimonial = document.querySelector('.testimonial');
// const user_image = document.querySelector('.user-image');
// const username = document.querySelector('.username');
// const role = document.querySelector('.role');





// let idx = 0;

// setInterval(fetchPost,10000);
// fetchPost();
// async function fetchPost () {

//     let res = await fetch('testimonialbox.json');

//     let data = await res.json();

    
//     idx++

//     if (idx > data.length - 1) {
//         idx = 0
//     } else if (idx < 0) {
//         idx = data.length - 1
//     }

//     let { name, position, photo, text } = data[idx];
    
//     testimonial.innerText = text;
//     user_image.src = photo;
//     user_image.alt =  name;
//     username.innerText = name;
//     role.innerText = position;

// }

