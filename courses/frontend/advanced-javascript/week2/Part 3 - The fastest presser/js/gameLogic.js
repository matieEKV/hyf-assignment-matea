import { startTimer } from "./timer.js";
import { gameState } from "./game-state.js";
import { getWinner } from "./endGame.js";

const countdownContainer = document.querySelector(".top-container");

//show 3 seconds countdown on the screen
function countdown() {
  countdownContainer?.classList.remove("hidden");
  startTimer(4, (passedTime) => {
    document.querySelector(".countdown").textContent = passedTime;
  });
  setTimeout(() => {
    document.querySelector(".countdown").textContent = "START";
    startGame();
  }, 5000);
}

function startGame() {
  gameState.isStarted = true;
  updatePlayerInfo();
  gameState.playerData.forEach((player) => {
    player.keyDisplay.textContent = `Press ${player.key.toUpperCase()}`;
  });
  console.log(gameState);
  startTimer(gameState.time, (passedTime) => {
    document.querySelector(".countdown").textContent = passedTime;
  });
  console.log("we are in the startGame");
  document.addEventListener("keydown", startScore);
}

function startScore(event) {
  gameState.key = event.key.toLowerCase();
  gameState.playerData.forEach((player) => {
    player.keyDisplay.textContent = `Press ${player.key.toUpperCase()}`;
    if (player.key === gameState.key) {
      if (gameState.isStarted) {
        player.score++;
        player.counter.textContent = player.score;
      }
    }
  });
}

function stopScore() {
  gameState.isStarted = false;
  // countdownContainer.classList.add("hidden");
  document.removeEventListener("keydown", startScore);
  getWinner();
}

let keyIndex = 0;
function updatePlayerInfo() {
  //store the counter element for each player based on their id
  gameState.playerData.forEach((element) => {
    const id = element.id;
    element.counter = document.querySelector(`#player${id} .counter`);
    element.keyDisplay = document.querySelector(`#player${id} .which-key`);
    element.playerBox = document.querySelector(`#player${id}`);
    element.key = gameState.keys[keyIndex];
    keyIndex++;
  });
}

export { countdown, startGame, stopScore, countdownContainer };
