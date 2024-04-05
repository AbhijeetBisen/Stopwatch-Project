const hourElm = document.querySelector('#hour');
const minuteElm = document.querySelector('#minute');
const secondElm = document.querySelector('#second');
const stopBtn = document.querySelector('#stop');
const startBtn = document.querySelector('#start');
const resetBtn = document.querySelector('#reset');

let seconds = 0;
let interval;

function updateClock() {
  const hour = Math.floor(seconds / 3600).toString().padStart(2, '0');
  const minute = (Math.floor(seconds / 60) % 60).toString().padStart(2, '0'); // corrected line
  const second = (seconds % 60).toString().padStart(2, '0');

  hourElm.textContent = hour;
  minuteElm.textContent = minute;
  secondElm.textContent = second;
}

function startTimer() {
  interval = setInterval(() => {
    seconds++;
    updateClock();
  }, 1000);
  startBtn.disabled = true;
}

function stopTimer() {
  if (interval) clearInterval(interval);
  startBtn.disabled = false;
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', () => {
  seconds = 0;
  stopTimer();
  updateClock();
});
stopBtn.addEventListener('click', stopTimer);
