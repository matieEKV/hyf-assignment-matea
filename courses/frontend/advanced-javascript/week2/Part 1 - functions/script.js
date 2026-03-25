//1.1 - Display the text Called after 2.5 seconds on the page 2.5 seconds after the script is loaded.
window.addEventListener("load", () =>
  setTimeout(() => console.log("Called after 2.5 seconds"), 2500),
);

//1.2 - Create a function that takes 2 parameters: delay and stringToLog. Calling this function should display
// the stringToLog on the page after delay seconds. Call the function you have created with some different arguments.

function toBeDelayed(delay, stringToLog) {
  return setTimeout(() => console.log(stringToLog), delay * 1000);
}

toBeDelayed(5, "This string has been delayed for 5 seconds");
toBeDelayed(3, "This string has been delayed for 3 seconds");

//1.3 - Create a button in html. When clicking this button, use the function you created in the previous task to display
// the text Called after 5 seconds on the page 5 seconds after the button is clicked.

document
  .querySelector(".btn")
  .addEventListener("click", () =>
    toBeDelayed(5, "This string has been delayed for 5 seconds"),
  );

//1.4 Create two functions and assign them to two different variables. One function displays Earth on the page, the other displays Saturn.
// Now create a new third function that has one parameter: planetLogFunction. The only thing the third function should do is call the provided
// parameter function. Try calling the third function once with the Earth function and once with the Saturn function.

const planetDisplay = document.querySelector(".planet-display");

const earthLogger = function () {
  return "EARTH";
};
const saturnLogger = function () {
  return "SATURN";
};

function planetLogFunction(planet) {
  planetDisplay.textContent = planet();
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

//1.5 Create a button with the text "Log location". When this button is clicked, display the user's location (latitude, longitude) on the page

document.querySelector(".location").addEventListener("click", getLocation);

function getLocation() {
  navigator?.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
  document.querySelector(".latitude").textContent =
    position.coords.latitude.toFixed(4);
  document.querySelector(".longitude").textContent =
    position.coords.longitude.toFixed(4);
}

//1.7 When called the function should wait delay seconds and then call the provided callback function

function runAfterDelay(delay, callback) {
  setTimeout(callback, delay * 1000);
}

runAfterDelay(4, () => console.log("Here is the message delayed by 4 seconds"));

//1.8 Check if the user has double-clicked on the page. A double click is two clicks within 0.5 seconds.
// If a double click is detected, display the text "double click!" on the page.
let clickCounter = 0;

window.addEventListener("click", isDoubleClick);

function isDoubleClick() {
  clickCounter++;

  if (clickCounter === 1) {
    setTimeout(() => (clickCounter = 0), 500);
  } else {
    document.querySelector(".double-click").textContent =
      "You have double clicked!!";
  }
}

//1.9 If shouldTellFunnyJoke is true it should call logFunnyJoke, which displays a funny joke on the page.
// Otherwise it should call logBadJoke, which displays a bad joke on the page.
const evaluation = document.querySelector(".funnyOrNot");
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  shouldTellFunnyJoke ? logFunnyJoke() : logBadJoke();
}

function logFunnyJoke() {
  evaluation.textContent = "That really was a funny joke!";
}

function logBadJoke() {
  evaluation.textContent = "That was a bad joke!";
}

jokeCreator(true, logFunnyJoke, logBadJoke);
