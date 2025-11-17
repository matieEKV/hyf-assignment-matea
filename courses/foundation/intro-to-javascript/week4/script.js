// Smart-ease Goes Global! - Flight booking fullname function,added Formal fullname

function getFullName(firstName, lastName, useFormalName = false) {
  return !useFormalName
    ? `${firstName} ${lastName}`
    : `Lord ${firstName} ${lastName}`;
}

const fullName1 = getFullName("Benjamin", "Hughes", true);

const fullName2 = getFullName("Jane", "Doe");

console.log(fullName1, fullName2); // Benjamin Hughes Jane Doe

/*But what if the person is a woman? Describe how you would fix the getFullName so it also works for women

- instead of passing a boolean value, we could pass a string with a requested formal name. */
//---------------------------------------------------------

//Event application for a calendar

function getEventWeekday(daysFromNow) {
  const date = new Date();
  let eventDayNumber = (date.getDay() + daysFromNow) % 7; //make sure to wrap the count to 0 after 7 days

  let eventDay = "";

  switch (eventDayNumber) {
    case 0:
      eventDay = "Sunday";
      break;
    case 1:
      eventDay = "Monday";
      break;
    case 2:
      eventDay = "Tuesday";
      break;
    case 3:
      eventDay = "Wednesday";
      break;
    case 4:
      eventDay = "Thursday";
      break;
    case 5:
      eventDay = "Friday";
      break;
    default:
      eventDay = "Saturday";
  }
  return eventDay;
}

console.log(getEventWeekday(13));

//---------------------------------------------------------

//Weather wear

function getClothesSuggestion(temperature) {
  let clothes;

  if (temperature < -30) {
    clothes = "Clothes for the North Pole";
  } else if (temperature < -30 && temperature < 0) {
    clothes =
      "Snow suit, thermo socks,thermo undergarment, hat, gloves and scarf";
  } else if (temperature < 1 && temperature < 12) {
    clothes =
      "Thinner winter jacket, pants, long sleeved shirt. If windy wear hat and gloves.";
  } else if (temperature < 13 && temperature < 20) {
    clothes = "Long sleeved shirt, pants.";
  } else if (temperature < 21 && temperature < 30) {
    clothes = "Light breathable clothes - t-shirt, shorts.";
  } else if (temperature < 31 && temperature < 40) {
    clothes =
      "Long sleeved shirt, light pants to protect against UV. If evening wear a dress.";
  } else {
    clothes = "Special clothes that will protect against very high UV index";
  }

  return clothes;
}

const clothesToWear = getClothesSuggestion(45);

console.log(clothesToWear);

//---------------------------------------------------------

//Student Manager

const class07Students = [];
function addStudentToClass(studentName) {
  const isFound = class07Students.includes(studentName);
  const hasSpace = class07Students.length < 6;

  if (isFound) {
    return;
  }
  if (studentName == "") {
    return;
  }
  if (hasSpace || studentName === "Queen") {
    class07Students.push(studentName);
  }
}
const studentApplicants = [
  "Kate",
  "Jane",
  "",
  "Tom",
  "Jane",
  "Lucy",
  "Oscar",
  "Peter",
  "Tina",
  "Queen",
  "Queen",
  "Lin",
];

for (let i = 0; i < studentApplicants.length; i++) {
  addStudentToClass(studentApplicants[i]);
}

console.log(class07Students);
console.log(getNumberOfStudents());

function getNumberOfStudents() {
  return class07Students.length;
}

//---------------------------------------------------------

// Candy helper
let boughtCandyPrices = [];

function addCandy(candyType, weight) {
  const normalizedCandy = candyType.toLowerCase();

  if (normalizedCandy === "sweet") {
    boughtCandyPrices.push(0.5 * weight);
  } else if (normalizedCandy === "chocolate") {
    boughtCandyPrices.push(0.7 * weight);
  } else if (normalizedCandy === "toffee") {
    boughtCandyPrices.push(1.1 * weight);
  } else if (normalizedCandy === "chewing-gum") {
    boughtCandyPrices.push(0.03 * weight);
  }
}

addCandy("sweet", 20);
addCandy("toffee", 30);
addCandy("Chocolate", 4);
addCandy("chewing-gum", 16);

const amountToSpend = Math.random() * 100;

function canBuyMoreCandy() {
  let i = 0;
  let total = 0;

  while (i < boughtCandyPrices.length - 1) {
    total += boughtCandyPrices[i];
    i++;
  }
  return amountToSpend - total > 0;
}

console.log(
  canBuyMoreCandy()
    ? "You can buy more, so please do!"
    : "Enough candy for you!"
);

/*thoughts for improvement :
- use an array of objects to store candies and price and map over them
- limit how many candies can be added to the array based on the amount of money to spend*/

//---------------------------------------------------------

// Exercise 3-b Count by sound(from the session)

const friendNames = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];
let counter = 0;

for (let name in friendNames) {
  if (friendNames[name].toLowerCase().includes("a")) {
    counter++;
  } else {
    console.log(friendNames[name]);
  }
}

console.log(counter);
