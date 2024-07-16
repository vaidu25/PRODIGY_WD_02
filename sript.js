let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let intervalId = null;
let isRunning = false;

document.getElementById('start').addEventListener('click', start);
document.getElementById('pause').addEventListener('click', pause);
document.getElementById('reset').addEventListener('click', reset);

function start() {
    if (!isRunning) {
        intervalId = setInterval(updateTime, 10);
        isRunning = true;
    }
}

function pause() {
    clearInterval(intervalId);
    isRunning = false;
}

function reset() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById('watch').innerText = '00:00:00:00';
    clearInterval(intervalId);
    isRunning = false;
}

function updateTime() {
    milliseconds += 10;
    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }
    let hoursString = hours.toString().padStart(2, '0');
    let minutesString = minutes.toString().padStart(2, '0');
    let secondsString = seconds.toString().padStart(2, '0');
    let millisecondsString = milliseconds.toString().padStart(3, '0');
    document.getElementById('watch').innerText = `${hoursString}:${minutesString}:${secondsString}:${millisecondsString}`;
}