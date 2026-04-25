const modal = document.querySelector(".options-container");
const helpPopup = document.querySelector(".help-popup");

function closeModal() {
  modal.classList.add("hidden");
}

document.querySelector(".help").addEventListener("click", (event) => {
  event.stopPropagation();
  helpPopup.classList.remove("hidden");
});

document.addEventListener("click", () => {
  if (!helpPopup.classList.contains("hidden")) {
    helpPopup.classList.add("hidden");
  }
});

export { closeModal };
