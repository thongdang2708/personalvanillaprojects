let textEl = document.getElementById('text');
let speedEl = document.getElementById('speed');
let text = "We love programming!";
let speed = 300/speedEl.value;
let idx = 1;

setText();

function setText () {

    textEl.innerText = text.slice(0,idx);

    idx++;

    if (idx > text.length) {
        idx = 1;
    }

    setTimeout(setText,speed);

}


speedEl.addEventListener('input', (ed) => speed = 300/(ed.target.value));