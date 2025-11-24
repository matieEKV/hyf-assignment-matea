//Exercise 0 - remove item from an array

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];
const nameToRemove = "Ahmad";
let index = 0;
for (let name of names) {
  if (name === nameToRemove) {
    index = names.indexOf(name);
    names.splice(index, 1);
  }
}

// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'Katrine', 'Tala']
//Exercise 1 - given speed and distance, write a function which returns the time it will take to arrive at your destination.

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function calculateTimeOfTravel(travelInfo) {
  const speed = travelInfo.speed;
  const distance = travelInfo.destinationDistance;
  const hours = Math.floor(distance / speed);
  let minutes = 0;
  const remainder = distance % speed;

  if (remainder > 0) {
    minutes = Math.floor((remainder * 60) / speed);
  }

  return minutes != 1
    ? `${hours} hours and ${minutes} minutes`
    : `${hours} hours and ${minutes} minute`;
}

const travelTime = calculateTimeOfTravel(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes
