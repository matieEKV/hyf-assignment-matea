import { gameState } from "./game-state.js";
import { countdownContainer } from "./gameLogic.js";

const scoresArray = [];

function getWinner() {
  gameState.playerData.forEach((player) => {
    scoresArray.push(player.score);
    scoresArray.sort((a, b) => b - a);
  });
  gameState.playerData.forEach((player) => {
    if (player.score === scoresArray[0] && player.score > 0) {
      if (player.playerBox) {
        player.keyDisplay.textContent = `${player.key.toUpperCase()} WON!`;
        player.keyDisplay.style.background = "rgb(121, 239, 121)";
        player.playerBox.style.border = "15px solid rgb(121, 239, 121)";
        console.log("players score", player.score, scoresArray[0]);
      }
    } else {
      player.keyDisplay.textContent = `${player.key.toUpperCase()} LOST!`;
      player.keyDisplay.style.background = "rgb(239, 150, 150)";
      player.playerBox.style.border = "15px solid rgb(239, 150, 150)";
    }
  });
}

export { getWinner };
