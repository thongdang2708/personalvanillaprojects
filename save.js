// const notification = document.querySelector('.notification');
// const error = document.querySelector('error');

// setTimeout(() => {
//     error.innerHTML = '';
// }, 2000)


// const notification = document.querySelector('.notification');
//         const error = document.querySelector('error');
//         let password = document.getElementById('password');
//         let password_repeat = document.getElementById('password-repeat')
//         const form = document.getElementById('form');
//         form.addEventListener('submit', async (ed) => {
//             ed.preventDefault();
//             let p = document.createElement('p');
//             p.classList.add('error');
//             if (password.value.length < 6) {
//                 p.innerText = 'Fill again!'
//                 notification.appendChild(p);

//                 setTimeout(() => {
//                     p.innerText = '';
//                 },2000)
//             } else if (password.value !== password_repeat.value) {
//                  p.innerText = 'Fill again! Not the same'
//                 notification.appendChild(p);

//                 setTimeout(() => {
//                     p.innerText = '';
//                 },2000)
//             } 

//             }
            
//         ) 

// await fetch('http://localhost:3000/post/register', {
//                     method: "POST",
//                     headers: {
//                         "Content-type" : "application/json"
//                     },
//                     body: JSON.stringify({
//                         username : username.value,
//                         password : password.value,
//                         password_repeat : password_repeat.value
//                     }),
//                     redirect : "follow",
//                      credentials:'include',
//                      cache:'no-cache',
//                 }, 
//                 )


// else if (data.some(info => info.username == username.value.trim())) {
//     p.innerText = 'User already existed!'
//     notification.appendChild(p);

//     setTimeout(() => {
//         p.innerText = '';
//     },2000)
// }






// let p = document.createElement('p');
// p.classList.add('error');
// if (password.value.length < 6 || username) {
//     p.innerText = 'Fill again!'
//     notification.appendChild(p);

//     setTimeout(() => {
//         p.innerText = '';
        
//     },2000)
//       password.value = '';
//     password_repeat.value = '';
// } else if (password.value !== password_repeat.value || username) {
//      p.innerText = 'Fill again! Not the same'
//     notification.appendChild(p);

//     setTimeout(() => {
//         p.innerText = '';
    
//     },2000)
//     password.value = '';
//     password_repeat.value = '';
  
// }


// p.innerText = 'Created succesfully!';
// notification.appendChild(p);
// setTimeout(() => {
//     p.innerText = '';
// },2000);





// method: "POST",
// headers: {
//     "Content-type" : "application/json"
// },
// body: JSON.stringify({
//     username : username.value,
//     password : passwordCheck,
//     password_repeat : passwordRepeat,
// }),
// redirect : "follow",
//  credentials:"include",
//  cache:"no-cache",


//  await fetch('http://localhost:3000/post/register',{
//     method: "POST",
//     headers: {
//       "Content-type" : "application/json"
//      },body: JSON.stringify({
//             username : username.value,
//             password : passwordCheck,
//             password_repeat : passwordRepeat,
//     }),redirect : "follow",
//     credentials:"include",
//     cache:"no-cache",
// }) 