import { closeModal } from "./modal.js";
import { addClass, createElements } from "./grid.js";
import { gameState } from "./game-state.js";
import { countdown } from "./gameLogic.js";

document
  .querySelector(".options-container")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    buildBoard();
  });

function buildBoard() {
  //store the data from the form
  const data = new FormData(event.target);
  gameState.players = parseInt(data.get("player-number"));
  gameState.time = data.get("time");

  closeModal();
  addClass();
  createElements();
  countdown();
}

export { buildBoard };
