import { gameState } from "./game-state.js";

const gameBoard = document.querySelector(".game-board");
let idCounter = 0;
function addClass(playerNumber) {
  console.log("in add class");
  console.log(gameState.players);
  gameBoard.classList.remove(
    "twoPlayers",
    "threePlayers",
    "fourPlayers",
    "onePlayer",
  );
  switch (gameState.players) {
    case 2:
      gameBoard.classList.add("twoPlayers");
      break;
    case 3:
      gameBoard.classList.add("threePlayers");
      break;
    case 4:
      gameBoard.classList.add("fourPlayers");
      break;
    default:
      gameBoard.classList.add("onePlayer");
  }
  console.log(typeof gameState.players);
}

function createElements() {
  while (gameState.players > 0) {
    const playerBoard = document.createElement("div");
    playerBoard.classList.add("player-board", "player");
    playerBoard.id = "player" + ++idCounter;
    gameState.playerData.push({ id: idCounter, score: 0 });

    const whichKey = document.createElement("div");
    whichKey.classList.add("which-key");

    const counter = document.createElement("div");
    counter.classList.add("counter");

    gameBoard.append(playerBoard);
    playerBoard.append(whichKey, counter);
    gameState.players--;
  }
}

export { addClass, createElements };
