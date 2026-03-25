const modal = document.querySelector(".options-container");

function closeModal() {
  modal.classList.add("hidden");
}

function openModal() {
  modal.classList.remove("hidden");
}

export { closeModal, openModal };
