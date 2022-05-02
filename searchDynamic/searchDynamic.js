let search = document.getElementById('search');
let data = ['Find doctors','Find specializations','Find Hospitals'];



let idx = 0;


setInterval(showPlaceholder,3000);

showPlaceholder();
function showPlaceholder () {

    idx++;

    changePlaceholder();

}

function changePlaceholder () {

    if (idx > data.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = data.length - 1;
    }

    let script = data[idx];

    search.placeholder = script;


}