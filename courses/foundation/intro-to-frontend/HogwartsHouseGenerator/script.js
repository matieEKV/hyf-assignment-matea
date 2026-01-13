const introBubble = document.querySelector(".introBubble");
const introBubbleContainer = document.querySelector(".introBubbleContainer");
const bubble1 = document.querySelector(".top-left");
const bubble2 = document.querySelector(".bottom-left");
const bubble3 = document.querySelector(".top-right");
const bubble4 = document.querySelector(".bottom-right");
const bubbleHolder = document.querySelectorAll(".bubbleHolder");
const hat = document.querySelector(".hat");
const images = document.querySelectorAll(".image-container");

let counter = 0;
let bubbleCounter = 0;
let interval;
let intervalID;
let submitButton;
let wizardName;
let house;
let oldHouse;

//when page loads start displaying welcome messages
window.addEventListener(
  "load",
  () =>
    (interval = setInterval(() => {
      changeMessage();
    }, 4000))
);

//function that loops through the messages and displays them when called
function changeMessage() {
  const messages = [
    "Before we begin our sorting ceremony, I would like to say a few words.",
    "And here they are: ",
    "Now we can begin with our sorting ceremony.",
    "This here is our sorting hat. It will tell you which house you belong to.",
    "Click on the hat when you are ready to hear its decision and good luck!",
  ];

  if (counter < messages.length) {
    introBubble.innerHTML = messages[counter];

    if (introBubble.innerHTML.startsWith("And here")) {
      intervalID = setInterval(() => inflateBubbles(), 800);
    } else if (introBubble.innerHTML.startsWith("This here")) {
      hat.style.display = "block";
    }
  } else {
    clearInterval(interval);
  }
  counter++;
}

function inflateBubbles() {
  const bubbles = [bubble1, bubble2, bubble3, bubble4];
  if (bubbleCounter < bubbles.length) {
    bubbles[bubbleCounter].style.display = "block";
  } else {
    clearInterval(intervalID);
    bubbleHolder.forEach((element) => {
      element.style.display = "none";
    });
  }
  bubbleCounter++;
}

hat.addEventListener("click", activateHat);

function activateHat() {
  if (!wizardName) {
    createInputElement();
  } else {
    performSorting();
  }
}

function createEl(element) {
  return document.createElement(element);
}
function createInputElement() {
  introBubble.innerHTML = "What is your name, Wizard?";
  if (!document.querySelector("#wizard-name")) {
    const input = createEl("input");
    const button = createEl("button");
    introBubbleContainer.appendChild(input);
    introBubbleContainer.appendChild(button);
    input.type = "text";
    input.id = "wizard-name";
    input.style.fontSize = "2rem";
    input.className = "prompt";
    input.setAttribute("required", "");
    button.innerHTML = "Submit";
    button.className = "prompt";
    button.addEventListener("click", notifyUser);
    //add option to submit name with enter key
    input.addEventListener("keypress", (e) => {
      if (e.key == "Enter") button.click();
    });
  }
}

function notifyUser() {
  wizardName = getUserName();
  if (!wizardName) {
    return;
  }
  performSorting();
  //remove the input and button element after submitting
  const prompts = document.querySelectorAll(".prompt");
  prompts.forEach((prompt) => {
    prompt.style.display = "none";
  });
}

function getUserName() {
  const name = document.querySelector("#wizard-name");
  if (!name.value) {
    introBubble.innerHTML =
      "The Sorting hat cannot decide on your Hogwarts House without you name.";
    return false;
  }
  return name.value.trim();
}

function performSorting() {
  house = decideHouse();
  introBubble.innerHTML = `${wizardName} belongs to ${house.name}!!`;
  //check for p element, if not there create a new one
  if (!document.querySelector("#direction")) {
    const direction = createEl("p");
    direction.id = "direction";
    introBubbleContainer.appendChild(direction);
    direction.innerHTML = "Click on the Sorting Hat for another chance";
  }
  images.forEach((image) => {
    image.style.backgroundImage = "url(" + house.logo + ")";
  });
}

function decideHouse() {
  const houses = [
    {
      name: "GRYFFINDOR!",
      logo: "https://insighteditions.com/cdn/shop/products/82450-88465-cover_2048x2048.jpg?v=1600373018",
    },
    {
      name: "HUFFLEPUFF!",
      logo: "https://insighteditions.com/cdn/shop/products/82453-88490-cover_2048x2048.jpg?v=1600373062",
    },
    {
      name: "RAVENCLAW!",
      logo: "https://insighteditions.com/cdn/shop/products/82452-88470-cover_2048x2048.jpg?v=1600373047",
    },
    {
      name: "SLYTHERIN!",
      logo: "https://insighteditions.com/cdn/shop/products/82451-88557-cover_2048x2048.jpg?v=1600373033",
    },
  ];
  const index = Math.floor(Math.random() * houses.length);
  //make sure houses do not repeat in a row
  while (houses[index].name == undefined || houses[index].name == oldHouse) {
    index = Math.floor(Math.random() * houses.length);
  }
  oldHouse = houses[index].name;
  return houses[index];
}

//function to pause/play the background music
function play() {
  const audio = document.querySelector("audio");
  const pauseButton = document.querySelector(".pause");
  if (audio.paused) {
    audio.play();
    pauseButton.style.background = "white";
  } else {
    audio.pause();
    pauseButton.style.background = "grey";
  }
}
