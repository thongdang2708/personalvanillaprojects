
let toggle = document.querySelector('.toggle');
let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');
let timeEl = document.querySelector('.time');
let dateEl = document.querySelector('.date');



toggle.addEventListener('click', function (ed) {
    ed.preventDefault();

    let body = document.body;

   if (body.classList.contains('dark')) {
       body.classList.remove('dark');
       ed.target.innerText = "Dark Mode"
   } else {
       body.classList.add('dark');
       ed.target.innerText = "Light Mode";
   }
})

let days = ["Sunday","Monday","TuesDay","Wednesday","Thursday","Friday","Saturday"];
let months = ["Jan","Feb","Mar","Arp","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];


let interval = setInterval(setTime,1000);
setTime();
function setTime () {

    let time = new Date();
    let day = time.getDay();
    let month = time.getMonth();
    let hours = time.getHours();
    let date = time.getDate();
    let hoursForClock = hours % 12;
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    
    hour.style.transform = `translate(-50%,-100%) rotate(${scale(hoursForClock,0,11,0,360)}deg)`;
    minute.style.transform = `translate(-50%,-100%) rotate(${scale(minutes,0,59,0,360)}deg)`;
    second.style.transform = `translate(-50%,-100%) rotate(${scale(seconds,0,59,0,360)}deg)`;

    timeEl.innerHTML = `${hoursForClock} : ${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">   ${date}   </span>`


}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}