const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const milisecondsEl = document.querySelector("#miliseconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const continueBtn = document.querySelector("#continueBtn");
const resetBtn = document.querySelector("#resetBtn");

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
continueBtn.addEventListener("click", continueTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
    interval = setInterval(() => {
      if (!isPaused) {
        miliseconds += 10;
        if (miliseconds === 1000) {
          seconds++;
          miliseconds = 0;
        }
        if (seconds === 60) {
          minutes++;
          seconds = 0;
        }
        minutesEl.innerHTML = formatTime(minutes);
        secondsEl.innerHTML = formatTime(seconds);
        milisecondsEl.innerHTML = formatMiliseconds(miliseconds);
      }
    }, 10);
    startBtn.style.display = "none";
    pauseBtn.style.display = "inline-block";
}

function pauseTimer() {
    isPaused = true;
    pauseBtn.style.display = "none";
    continueBtn.style.display = "inline-block";
}

function continueTimer() {
    isPaused = false;
    continueBtn.style.display = "none";
    pauseBtn.style.display = "inline-block";
}

function resetTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
    isPaused = false;
    minutesEl.innerHTML = "00";
    secondsEl.innerHTML = "00";
    milisecondsEl.innerHTML = "000";
    startBtn.style.display = "inline-block";
    pauseBtn.style.display = "none";
    continueBtn.style.display = "none";
  }

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMiliseconds(time) {
    return time < 100 ? time.padStart(3, 0) : time;
}
