// Voice assistant Assignment
const userData = {
  name: "",
  toDo: [],
};

function getReply(command) {
  if (typeof command !== "string") {
    return;
  }
  const askName = (command) => command.startsWith("Hello my name is ");
  const giveName = (command) => command === "What is my name";
  const newToDo = (command) => command.startsWith("Add ");
  const deleteToDo = (command) => command.startsWith("Remove ");
  const giveToDos = (command) => command === "What is on my todo?";
  const giveDate = (command) => command === "What day is it today?";
  const isMathQuestion = (command) =>
    /What is (\d+)\s*([+\-*/])\s*(\d+)/i.test(command);
  const askTimer = (command) => command.startsWith("Set timer for");
  const askWeather = (command) => command === "What is the weather today?";

  switch (true) {
    case askName(command):
      return setName(command);

    case giveName(command):
      return getName();

    case newToDo(command):
      return addToDo(command);

    case deleteToDo(command):
      return removeToDo(command);

    case giveToDos(command):
      return getToDos();

    case giveDate(command):
      return getDate();

    case isMathQuestion(command):
      return calculate(command);

    case askTimer(command):
      return setTimer(command);

    case askWeather(command):
      return checkWeather();

    default:
      return "Please use a valid command.";
  }
}

function setName(command) {
  const userName = command.replace("Hello my name is ", "");

  if (userName < 1) {
    return "Please input valid name";
  } else {
    userData.name = userName;
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
  const arrayOperation = command.replace("What is ", "").split(" "); //remove the words and spaces from the command
  const number1 = parseInt(arrayOperation[0]);
  const number2 = parseInt(arrayOperation[2]);

  const arithmeticOperators = ["+", "-", "/", "*"];

  let indexOperator = arithmeticOperators.indexOf(arrayOperation[1]);

  switch (indexOperator) {
    case 0:
      return number1 + number2;
    case 1:
      return number1 - number2;
    case 2:
      return number1 / number2;
    case 3:
      return number1 * number2;
    default:
      return "Please use numbers and valid arithmetic operators";
  }
}

function setTimer(command) {
  const minutes = parseInt(command.match(/[0-9]+/));
  if (!minutes) {
    return "Cannot set timer without number of minutes";
  }
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

console.log(getReply("Hello my name is Matea Lucija ")); //Nice to meet you Matea
console.log(getReply("What is my name")); //Matea
console.log(getReply("Add shopping to my todo")); //Added shopping to a list of todos
console.log(getReply("Add cooking to my todo")); //Added cooking to a list of todos
console.log(getReply("What day is it today?")); // Tuesday, 2 December 2025
console.log(getReply("What is 10 + 1")); // 11
console.log(getReply("Remove shopping from my todo")); //Removed shopping from your todo list
console.log(getReply("What is on my todo?")); //You have 1 todo - cooking
console.log(getReply("Set timer for 1 minute")); //Timer set for 1 minute --- Timer done! (after 1 min)
console.log(getReply("What is the weather today?")); //random (It is 5 degrees today and raining. Wear warm waterproof clothes)
console.log(getReply("How old am I")); //Please use a valid command

//-----CLASS EXERCISES -----//

/*Exercise 0 - FizzBuzz (replace numbers - 
divisible by 3 with Fizz, divisible by 5 with Buzz, and divisible by both with FizzBuzz)*/

function fizzBuzz(number1, number2) {
  for (let i = number1; i <= number2; i++) {
    let fizz = i % 3;
    let buzz = i % 5;
    if (fizz == 0 && buzz == 0) {
      console.log("FizzBuzz");
    } else if (buzz == 0) {
      console.log("Buzz");
    } else if (fizz == 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(4, 17); //4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17

//Exercise 1 - get sentiment score from a sentence

function getSentimentScore(sentence) {
  const positiveAdjectives = [
    "great",
    "happy",
    "awesome",
    "amazing",
    "super",
    "wonderful",
    "thrilled",
    "ecstatic",
  ];
  const negativeAdjectives = [
    "terrible",
    "sad",
    "boring",
    "horrible",
    "dull",
    "annoying",
    "bad",
  ];
  const words = sentence.split(" ");
  const positiveWords = [];
  const negativeWords = [];

  for (const word of words) {
    if (
      !negativeAdjectives.includes(word) &&
      !positiveAdjectives.includes(word)
    ) {
      continue;
    } else if (negativeAdjectives.includes(word)) {
      negativeWords.push(word);
    } else {
      positiveWords.push(word);
    }
  }
  return {
    score: positiveWords.length + negativeWords.length,
    positiveWords,
    negativeWords,
  };
}
const sentimentScoreObject = getSentimentScore(
  "I am mega super awesome terrible happy"
);

console.log(sentimentScoreObject); //{score: 4, positiveWords: [ 'super', 'awesome', 'happy' ], negativeWords: [ 'terrible' ]}

//Exercise 2 - format credit card number to include spaces between 4 numbers

function formatCreditCardNumber(creditCardNumber) {
  const convertedToString = creditCardNumber.toString();
  let formatted = "";

  for (let i = 0; i < convertedToString.length; i += 4) {
    const addFour = i + 4;
    let str1 = convertedToString.slice(i, addFour);
    if (addFour === convertedToString.length || str1.length < 4) {
      //prevents adding an extra space at the end
      formatted += str1;
    } else {
      formatted += str1 + " ";
    }
  }
  return {
    original: creditCardNumber,
    formatted: formatted,
  };
}

const formattedCreditCardObject = formatCreditCardNumber(1234567890123);
console.log(formattedCreditCardObject); //{ original: 123456789, formatted: "1234 5678 9"}

//Exercise 3 - Write a function that counts the frequency of characters in a string:

function getCharacterFrequencies(word) {
  const arrayOfWord = word.split("");
  //long way

  const charCount = [];
  for (const char of arrayOfWord) {
    const foundChar = charCount.find((element) => element.character === char);
    if (foundChar) {
      foundChar.count++;
    } else {
      charCount.push({ character: char, count: 1 });
    }
  }
  return charCount;

  //short way using reduce method
  return arrayOfWord.reduce(function (accumulator, currentChar) {
    if (accumulator[currentChar]) {
      accumulator[currentChar]++;
    } else {
      accumulator[currentChar] = 1;
    }
    return accumulator;
  }, {});
}

console.log(getCharacterFrequencies("happy")); // { character: 'h', count: 1 }, { character: 'a', count: 1 }, { character: 'p', count: 2 }, { character: 'y', count: 1 }
