let timer = document.querySelector('.timer .time')
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

let start_btn = document.querySelector('.buttons .start');
let stop_btn = document.querySelector('.buttons .stop');
let reset_btn = document.querySelector('.buttons .reset');
let set_btn = document.querySelector('.buttons .time_setter');

let secs = 0;
let interval = null;

function timer() {
    secs++
    let hh = Math.floor(secs/3600)
    let mm = Math.floor(secs -(hh*3600)/60)
    let ss = secs % 60;
    timer.innerHTML = `${hh}:${mm}:${ss}`
}

start_btn.onclick = () => {
    if (interval){
        return
    }
    setInterval(timer, 1000)
}