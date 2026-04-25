import { gameState } from "./gameState.js";

const gameBoard = document.querySelector(".game-board");
let idCounter = 0;
function addClass(playerNumber) {
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
}

function createElements() {
  let playerNumber = gameState.players;
  for (let i = 0; i < playerNumber; i++) {
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
  }
}

export { addClass, createElements, gameBoard };
