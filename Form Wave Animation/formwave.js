





let labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((word,idx) => `<span style="transition-delay: ${idx*50}ms">    ${word}       </span>`)
    .join('');
})





































// let labels = document.querySelectorAll('.form-control label');


// labels.forEach(label => {

//     label.innerHTML = label.innerText
//     .split('')
//     .map((word,idx) => `<span style="transition-delay: ${idx * 50}ms">   ${word}       </span>`)
//     .join('');
// })









































// let labels = document.querySelectorAll('.form-control label');

// labels.forEach(label => {
//     label.innerHTML = label.innerText.split('').map((word,idx) => `<span style="transition-delay: ${idx*50}ms">   ${word}        </span>`).join('');
//     console.log(label);
// })

