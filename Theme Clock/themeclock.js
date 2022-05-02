

let toggle = document.querySelector('.toggle');
let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');
let timeEl = document.querySelector('.time');
let dateEl = document.querySelector('.date');

let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

toggle.addEventListener('click', function (red) {
    red.preventDefault();

    let body = document.body;

    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        red.target.innerText = "Dark Mode";
    } else {
        body.classList.add('dark');
        red.target.innerText = "Light Mode";
    }
})

setInterval(setTime,1000);
setTime();

function setTime () {
    let time = new Date();
    let day = time.getDay();
    let month = time.getMonth();
    let date = time.getDate();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let hoursForClock = hours % 12;
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hour.style.transform = `translate(-50%,-100%) rotate(${scale(hoursForClock,0,11,0,360)}deg)`;
    minute.style.transform = `translate(-50%,-100%) rotate(${scale(minutes,0,59,0,360)}deg)`;
    second.style.transform = `translate(-50%,-100%) rotate(${scale(seconds,0,59,0,360)}deg)`;

    timeEl.innerText = `${hoursForClock} : ${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">  ${date}    </span>   `

}




function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}