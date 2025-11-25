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

//Exercise 2 - how much of life is spent watching series

const seriesDurations = [
  {
    title: "Fleabag",
    days: 0,
    hours: 10,
    minutes: 0,
  },
  {
    title: "True Detective",
    days: 1,
    hours: 3,
    minutes: 0,
  },
  {
    title: "House",
    days: 5,
    hours: 9,
    minutes: 4,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

function calculateTimeTakenFromLife(tvShows) {
  const averageLifeExpectancyDays = 80 * 365;
  let sum = 0;
  let percentOfShow = 0;
  for (let show of tvShows) {
    percentOfShow =
      ((show.hours / 24 + show.days) / averageLifeExpectancyDays) * 100;
    console.log(`${show.title} took ${percentOfShow.toFixed(4)}% of my life`);
    sum += percentOfShow;
  }
  console.log(`That is ${sum.toFixed(4)}% of my life`);
}
//addition - should also add another property for how many times have we watched the show :D
calculateTimeTakenFromLife(seriesDurations);
