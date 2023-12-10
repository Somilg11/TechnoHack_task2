let timer;
let totalTimeInSeconds = 0;
let timeLeft = 0;
let isTimerRunning = false;

function updateTimer() {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('timer').innerText = formattedTime;
}

function setCustomTimer() {
    const hours = parseInt(document.getElementById('hours').value, 10) || 0;
    const minutes = parseInt(document.getElementById('minutes').value, 10) || 0;
    const seconds = parseInt(document.getElementById('seconds').value, 10) || 0;

    if (hours >= 0 && minutes >= 0 && seconds >= 0) {
        totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;
        timeLeft = totalTimeInSeconds;
        updateTimer();
        document.getElementById('hours').value = '';
        document.getElementById('minutes').value = '';
        document.getElementById('seconds').value = '';
    } else {
        alert('Please enter valid non-negative integers for hours, minutes, and seconds.');
    }
}

function startTimer() {
    if (!isTimerRunning && timeLeft > 0) {
        isTimerRunning = true;
        timer = setInterval(() => {
            timeLeft -= 1;
            updateTimer();
            if (timeLeft === 0) {
                clearInterval(timer);
                isTimerRunning = false;
                alert("Timer has finished!");
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    isTimerRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isTimerRunning = false;
    totalTimeInSeconds = 0;
    timeLeft = 0;
    updateTimer();
}
