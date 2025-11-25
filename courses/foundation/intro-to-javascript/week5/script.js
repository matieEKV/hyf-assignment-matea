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
  for (const show of tvShows) {
    percentOfShow =
      ((show.hours / 24 + show.days) / averageLifeExpectancyDays) * 100;
    console.log(`${show.title} took ${percentOfShow.toFixed(4)}% of my life`);
    sum += percentOfShow;
  }
  console.log(`That is ${sum.toFixed(4)}% of my life`);
}

calculateTimeTakenFromLife(seriesDurations);

//addition - should also add another property for how many times have we watched the show :D
//Exercise 3 - Smart-Ease - Back to basics

const notes = [];

// 3.1 - Save notes
function saveNote(content, id) {
  const note = {};
  note["content"] = content;
  note["id"] = id;
  notes.push(note);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

//3.2 -  get a note
function getNote(id) {
  for (const note of notes) {
    if (note.id === id) {
      return note;
    }
  }
}

const firstNote = getNote(0);
firstNote === undefined
  ? console.error("Invalid ID number")
  : console.log(firstNote);

//3.3 - print all notes
function logOutNotesFormatted() {
  for (const note of notes) {
    console.log(
      `The note with id: ${note.id}, has the following note text: ${note.content}`
    );
  }
}

logOutNotesFormatted();

//3.4 - Unique feature

//remove a note and store it in completed notes array
let completedNotes = [];
function removeNote(id) {
  for (const note of notes) {
    if (note.id === id) {
      const index = notes.indexOf(note);
      const removedNote = notes.splice(index, 1)[0]; //splice returns an array, so telling it to return an item at index 0 of that array;
      completedNotes.push(removedNote);
    }
  }
}

removeNote(2);
console.log(completedNotes);
console.log(notes);
