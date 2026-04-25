import { gameState } from "./gameState.js";

const scoresArray = [];

//confetti
const confettiSettings = { target: "my-canvas" };
const confetti = new ConfettiGenerator(confettiSettings);

function getWinner() {
  gameState.playerData.forEach((player) => {
    scoresArray.push(player.score);
    scoresArray.sort((a, b) => b - a);
  });
  gameState.playerData.forEach((player) => {
    if (player.score === scoresArray[0] && player.score > 0) {
      if (player.playerBox) {
        confetti.render();
        document.querySelector("#my-canvas").classList.remove("hidden");
        player.keyDisplay.textContent = `${player.key.toUpperCase()} WON!`;
        // player.keyDisplay.style.background = "rgb(121, 239, 121)";
        // player.playerBox.style.border = "15px solid rgb(121, 239, 121)";
        player.keyDisplay.classList.add("winner-key");
        player.playerBox.classList.add("winner-box");
      }
    } else {
      if (player.keyDisplay) {
        player.keyDisplay.textContent = `${player.key.toUpperCase()} LOST!`;
        player.keyDisplay.classList.add("loser-key");
        player.playerBox.classList.add("loser-box");
      }
    }
  });
}

export { getWinner };
