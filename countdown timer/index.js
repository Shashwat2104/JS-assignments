const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");



const newYear = "1 Jan 2023"

function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    // console.log(days, hours , minutes, seconds);

    daysEl.innerHTML = formate(days);
    hoursEl.innerHTML = formate(hours);
    minutesEl.innerHTML = formate(minutes);
    secondsEl.innerHTML = formate(seconds);

}

function formate(time) {
    return time < 10 ? (`0 ${time}`) : time;
}

countdown();

setInterval(countdown, 1000)