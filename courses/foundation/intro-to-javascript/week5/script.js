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
//Exercise 4 - CactusIO-interactive (Smart phone usage app)

let activities = [];

//4.1 - add the activity to array
function addActivity(activity, duration) {
  let singleActivity = {};
  let today = new Date();
  singleActivity["date"] = today.toLocaleDateString("en-GB");
  singleActivity["activity"] = activity;
  singleActivity["duration"] = duration;
  activities.push(singleActivity);
}

addActivity("Youtube", 30);
addActivity("Facebook", 40);
addActivity("Linkedin", 40);
console.log(activities);

//4.2 - show how many activities added so far and usage in minutes
//4.3 - show if limit reached. If yes error, if no warning of time remaining
const limitMinutes = 92;
function showStatus(activities, date, limit) {
  const activitiesForDate = activities.filter(
    //filter for the activities that match the date
    (activity) => activity.date == date
  );
  const length = activitiesForDate.length;
  let sumOfActivities = 0;
  if (length === 0) {
    console.log("Add some activities before calling showStatus");
    return;
  } else {
    for (const activity of activities) {
      if (activity.date === date) {
        sumOfActivities += activity.duration;
      }
    }
    console.log(
      `You have added ${length} activities. They amount to ${sumOfActivities} min. of usage`
    );
    checkIfLimitReached(limit, sumOfActivities);
  }
}

function checkIfLimitReached(limit, usage) {
  if (limit < usage) {
    const timeLeft = usage - limit;
    console.warn(
      `You still have ${timeLeft} minutes left for smartphoning today`
    );
  } else {
    console.error("You have reached your limit, no more smartphoning for you!");
  }
}

function findMostUsed(activities) {
  //1. sort the activity based of duration, it will be sorted in ascending order
  activities.sort((a, b) => a.duration - b.duration);
  //last item in array is the longest
  const lastActivity = activities[activities.length - 1];
  //2. filter the data to check if more activities used equally long
  const mostUsedData = activities.filter(
    (activity) => lastActivity.duration === activity.duration
  );
  console.log(mostUsedData);

  //check if some activities are used equally long
  let mostUsedActivities = [];
  if (mostUsedData.length > 1) {
    for (const mostUsedActivity of mostUsedData) {
      mostUsedActivities.push(mostUsedActivity.activity);
    }
    console.log(
      "These activities were used the most and equally long: " +
        mostUsedActivities
    );
    //if just one activity used longest
  } else {
    console.log(
      "This is the most used activity today: " + mostUsedData[0].activity
    );
  }
}

showStatus(activities, "25/11/2025", limitMinutes);
findMostUsed(activities);
