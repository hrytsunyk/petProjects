const time_item = document.querySelector('.timer .time');
const time_msds = document.querySelector('.timer .msds');
const start_btn = document.querySelector('.start')
const stop_btn = document.querySelector('.stop')
const reset_btn = document.querySelector('.reset')

let seconds = 0;
let interval = null;

start_btn.addEventListener('click', start);
stop_btn.addEventListener('click', stop);
reset_btn.addEventListener('click', reset)

function timer() {

    seconds++;
    let hrs = Math.floor(seconds/3600);
    // console.log(hrs);
    let mins = Math.floor((seconds - (hrs * 3600))/60);
    // console.log(mins)
    let sds= seconds % 60;
    // console.log(sds)

    if (hrs < 10) {hrs = '0' + hrs};
    if (mins < 10) {mins = '0' + mins};
    if (sds < 10) {sds = '0' + sds};

time_item.innerHTML = `${hrs}:${mins}:${sds}`;
};


function start() {
    if (interval) {
        return
    }
    interval = setInterval(timer, 1000);

};

function stop() {
    clearInterval(interval)
    interval=null;
};

function reset() {
    stop();
    seconds= 0;
    time_item.innerHTML = '00:00:00'
};
