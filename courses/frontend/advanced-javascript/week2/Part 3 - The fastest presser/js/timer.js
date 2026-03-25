import { stopScore } from "./gameLogic.js";

let timerInterval;

function startTimer(time, onTick) {
  if (!timerInterval) {
    timerInterval = setInterval(() => {
      time -= 1;
      if (onTick) {
        onTick(time);
      }
      if (time === 0) {
        stopTimer();
        stopScore();
      }
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

export { startTimer, stopTimer };
