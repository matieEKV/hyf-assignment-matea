import {
  getScreenshot,
  storeScreenshot,
  deleteFromCrudCrud,
} from "./src/APIHandler/ScreenshotService.js";
import InputValidation from "./src/Errors/InputValidation.js";
import Button from "./src/htmlBlueprint/Button.js";
import Container from "./src/htmlBlueprint/Container.js";
import Heading from "./src/htmlBlueprint/Heading.js";
import Input from "./src/htmlBlueprint/Input.js";
import Label from "./src/htmlBlueprint/Label.js";
import ScreenshotCard from "./src/htmlBlueprint/ScreenshotCard.js";
import Screenshot from "./src/screenshot/Screenshot.js";

let checked;
const heading = new Heading("h1", "heading", "Screenshot generator");
heading.render();

const inputContainer = new Container("div", "input-container");
inputContainer.render();

const submitButton = new Button("submitBtn", "Submit");
submitButton.render();

const label = new Label("label", "INSERT URL:", "input1");
label.render(inputContainer.domElement);

const inputEl = new Input("input", "input1");
inputEl.render(inputContainer.domElement);

submitButton.domElement.addEventListener("click", handleScreenshotOperation);

//create container for the screenshot cards
const galleryContainer = new Container("section", "gallery-container");
galleryContainer.render();

const deleteBtn = new Button("hidden", "DELETE");
deleteBtn.render(galleryContainer.domElement);

// calling API
async function handleScreenshotOperation() {
  const inputValue = inputEl.domElement.value.trim();
  inputEl.domElement.value = "";
  if (!inputValue) {
    throw new InputValidation(
      "Please input a valid URL! Input cannot be empty",
      (inputEl.domElement.style.border = "2px solid red"), //change the color of input box if empty
    );
  }
  const inputURL = encodeURIComponent(inputValue);

  submitButton.domElement.innerText = "Loading..."; //show loading while taking the screenshot

  const imageUrl = await getScreenshot(inputURL);
  const crudResponse = await storeScreenshot(inputURL, imageUrl);
  const screenshot = new Screenshot(crudResponse._id, inputValue, imageUrl);
  const screenshotCard = new ScreenshotCard(screenshot);
  galleryContainer.domElement.append(screenshotCard.container.domElement);
  submitButton.domElement.innerText = "Submit";
}

//listen for checkboxes being checked
galleryContainer.domElement.addEventListener("change", (event) => {
  if (event.target.classList.contains("card-input")) {
    const anyChecked = document.querySelector(".card-input:checked") !== null;
    deleteBtn.domElement.style.display = anyChecked ? "block" : "none";
  }
});

deleteBtn.domElement.addEventListener("click", deleteScreenshot);

//delete the chosen screenshots
async function deleteScreenshot() {
  deleteBtn.domElement.innerText = "DELETING...";
  const ids = getSelectedValue();

  for (const id of ids) {
    const isDeleted = await deleteFromCrudCrud(id);
    if (isDeleted) {
      for (const check of checked) {
        check.closest("div").remove(); //remove the entire container of deleted image from the DOM
      }
    }
    deleteBtn.domElement.innerText = "DELETE";
  }
  deleteBtn.domElement.style.display = "none";
}

//check for values of selected checkboxes
function getSelectedValue() {
  checked = document.querySelectorAll(".card-input:checked");
  const arrayOfChecked = Array.from(checked); //convert nodelist to array
  return arrayOfChecked.map((input) => input.value);
}

//check if all images are deleted
function isEmpty() {
  console.log(galleryContainer.domElement.children);
  return galleryContainer.domElement.children.length === 1; //button element is always visible
}
