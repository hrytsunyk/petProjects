//dial
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

//buttons
let start_btn = document.querySelector('.buttons .start');
let stop_btn = document.querySelector('.buttons .stop');

//getActualTime
let time;
start_btn.addEventListener('click', function() {

    let time = setInterval(function() {
        let date = new Date;

        let hrs = date.getHours()
        let mts = date.getMinutes()
        let sds = date.getSeconds()


        let h = hrs < 10 ? '0' + hrs : hrs;
        let m = mts < 10 ? '0' + mts : mts;
        let s = sds < 10 ? '0' + sds : sds;

        hours.innerHTML = `${h}`
        minutes.innerHTML = `${m}`
        seconds.innerHTML = `${s}`
    }, 1000);


stop_btn.addEventListener('click', () => {
    clearInterval(time);
})

});

