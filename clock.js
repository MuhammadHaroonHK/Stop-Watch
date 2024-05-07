let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let time = document.getElementById("time");

let stop = document.getElementById("stop");
let start = document.getElementById("start");
let reset = document.getElementById("reset");

let [h, m, s] = [0, 0, 0];


function startWatch() {
    s++;
    seconds.innerHTML = s = (s < 10) ? "0" + s : s;
    if (s == 60) {
        m++;
        s = 0;
        minutes.innerHTML = m = (m < 10) ? "0" + m : m;;
        if (m == 60) {
            h++;
            minutes = 0;
            hours.innerHTML = h = (h < 10) ? "0" + h : h;;
        }
    }
};

let strt = null;

function playbtn() {
    startWatch();
    strt = setInterval(startWatch, 1000);
}



function stopbtn() {
    clearInterval(strt);
}

function resetbtn() {
    [h, m, s] = [0, 0, 0];
    seconds.innerHTML = `00`;
    minutes.innerHTML = `00`;
    hours.innerHTML = `00`;
    clearInterval(strt);
}
