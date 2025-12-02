// Voice assistant Assignment
const userData = {
  name: "",
  toDo: [],
};

function getReply(command) {
  switch (true) {
    case command.startsWith("Hello my name is"):
      return setName(command);

    case command === "What is my name":
      return getName();

    case command.startsWith("Add "):
      return addToDo(command);

    case command.startsWith("Remove"):
      return removeToDo(command);

    case command === "What is on my todo?":
      return getToDos();

    case command === "What day is it today?":
      return getDate();

    case /What is (\d+)\s*([+\-*/])\s*(\d+)/i.test(command):
      return calculate(command);

    case command.startsWith("Set timer for"):
      return setTimer(command);

    case command === "What is the weather today?":
      return checkWeather();

    default:
      return "Please use a valid command.";
  }
}

function setName(command) {
  const length = command.split(" ").length;
  if (length <= 4 || length > 5) {
    return "Please input valid name";
  } else {
    userData.name = command.split(" ").pop();
    return `Nice to meet you ${userData.name}`;
  }
}

function getName() {
  if (!userData.name) {
    return "You haven't told me your name yet";
  } else {
    return userData.name;
  }
}

function addToDo(command) {
  const toDo = command.replace("Add ", "").replace(" to my todo", "");
  userData.toDo.push(toDo);
  return `Added ${toDo} to a list of todos`;
}

function removeToDo(command) {
  const toDo = command.replace("Remove ", "").replace(" from my todo", "");
  const indexToRemove = userData.toDo.indexOf(toDo);
  if (indexToRemove !== -1) {
    userData.toDo.splice(indexToRemove, 1);
    return `Removed ${toDo} from your todo list`;
  }
  return `You do not have ${toDo} added to your todo list.`;
}

function getToDos() {
  const length = userData.toDo.length;
  if (length < 1) {
    return "You haven't told me to add any todos yet";
  }
  return `You have ${length} todo${length > 1 ? "s" : ""} - ${userData.toDo}`;
}

function getDate() {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date().toLocaleDateString(undefined, options);
}

function calculate(command) {
  const stringOperation = command.replace("What is ", "");

  return eval(
    stringOperation
  ); /* I am aware of the security risk associated with this method, 
                                However I hope it is okay for our example here because I had a
                                 hard time finding out a better approach*/
}

function setTimer(command) {
  const minutes = command.split(" ").filter(Number);
  const message = `Timer set for ${minutes} minute${minutes > 1 ? "s" : ""}`;

  const milliseconds = minutes * 60000;
  setTimeout(() => {
    console.log("Timer done!");
  }, milliseconds);

  return message;
}

function checkWeather() {
  const weather = [
    "It is 15 degrees today. It is sunny but windy. Wear warm clothes",
    "It is -2 degrees today, and snow is expected. Wear very warm clothes",
    "It is 25 degrees today and clear. Wear sun protective clothes",
    "It is 5 degrees today and raining. Wear warm waterproof clothes",
    "It is 18 degrees today and windy. Wear a light jacket.",
  ];

  return weather[Math.floor(Math.random() * weather.length)];
}

console.log(getReply("Hello my name is Matea")); //Nice to meet you Matea
console.log(getReply("What is my name")); //Matea
console.log(getReply("Add shopping to my todo")); //Added shopping to a list of todos
console.log(getReply("Add cooking to my todo")); //Added cooking to a list of todos
console.log(getReply("What day is it today?")); // Tuesday, 2 December 2025
console.log(getReply("What is 6 + 5")); // 11
console.log(getReply("Remove shopping from my todo")); //Removed shopping from your todo list
console.log(getReply("What is on my todo?")); //You have 1 todo - cooking
console.log(getReply("Set timer for 1 minute")); //Timer set for 1 minute --- Timer done! (after 1 min)
console.log(getReply("What is the weather today?")); //random (It is 5 degrees today and raining. Wear warm waterproof clothes)
console.log(getReply("How old am I")); //Please use a valid command
