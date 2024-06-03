// script.js
document.addEventListener('DOMContentLoaded', () => {
    let startTime;
    let elapsedTime = 0;
    let timerInterval;

    const display = document.getElementById('display');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const resetButton = document.getElementById('resetButton');

    startButton.addEventListener('click', start);
    stopButton.addEventListener('click', stop);
    resetButton.addEventListener('click', reset);

    function start() {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTime, 1000);
        startButton.disabled = true;
        stopButton.disabled = false;
        resetButton.disabled = false;
    }

    function stop() {
        clearInterval(timerInterval);
        elapsedTime = Date.now() - startTime;
        startButton.disabled = false;
        stopButton.disabled = true;
    }

    function reset() {
        clearInterval(timerInterval);
        display.textContent = "00:00:00";
        elapsedTime = 0;
        startButton.disabled = false;
        stopButton.disabled = true;
        resetButton.disabled = true;
    }

    function updateTime() {
        elapsedTime = Date.now() - startTime;
        display.textContent = formatTime(elapsedTime);
    }

    function formatTime(time) {
        const date = new Date(time);
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        const seconds = String(date.getUTCSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }
});
