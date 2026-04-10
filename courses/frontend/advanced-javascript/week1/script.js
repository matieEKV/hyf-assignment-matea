//=========== TASK 1 -  Doubling of odd numbers ===========

function doubleOddNumbers(numArray) {
  return numArray
    .filter((number) => number % 2 !== 0)
    .map((number) => (number *= 2));
}

console.log(doubleOddNumbers([1, 2, 3, 4, 5, 6, 7])); // [ 2, 6, 10, 14 ]

//=========== TASK 2 -  Codewars Katas ===========
//2.1 If the number has an integer square root, take this, otherwise square the number.

function squareOrSquareRoot(array) {
  const mapped = array.map((number) =>
    Number.isInteger(Math.sqrt(number)) ? Math.sqrt(number) : number ** 2,
  );
  return mapped;
}

//=========== TASK 2 -  Codewars Katas ===========
//2.2 Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

function removeEveryOther(array) {
  return array.filter((number, index) => !(index % 2));
}

//=========== TASK 3 -  Working with movies ===========
import { movies } from "./movies.js";

const display = document.querySelector(".list");

document
  .querySelector(".cards-container")
  .addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;

    const action = button.getAttribute("data-action");
    const data = chooseAction(action);
    console.log(data, action);
    display.innerHTML = Array.isArray(data)
      ? data
          .map((element) => {
            return `<li>${element}</li>`;
          })
          .join("")
      : data;
  });

function chooseAction(action) {
  switch (action) {
    case "short":
      return getShortTitle(movies);
    case "long":
      return getLongTitle(movies);
    case "eighties":
      return getMovieCountInRange(movies);
    case "tagged":
      const array = addTag(movies);
      return array.map((movie) => `${movie.title} (Tag: ${movie.type})`);
    case "better":
      const movieArray = getHighRatedMovies(movies);
      return movieArray.map(
        (movie) => `${movie.title} (Rating: ${movie.rating})`,
      );
    case "keyword":
      return countMoviesByKeyword(movies);
    case "duplicated":
      return findDuplicated(movies);
    case "average":
      return getAverageRating(movies);
    case "counts":
      const obj = countRatedMovies();
      return JSON.stringify(obj);
  }
}
//3.1 Create an array of movies containing the movies with a short title
function getShortTitle(movies) {
  return movies
    .filter((movie) => movie.title.length <= 5)
    .map((movie) => movie.title);
}

console.log(getShortTitle(movies)); //title: 'Burnt',title: 'Crumb',title: 'Creep', title: 'Blow' etc...

//========================================================================================================

//3.2 Create an array of movie titles with long movie titles

function getLongTitle(movies) {
  return movies
    .filter((movie) => movie.title.length >= 30)
    .map((movie) => movie.title);
}

console.log(getLongTitle(movies)); // title: 'A Walk Among the Tombstones', title: 'A Very Harold & Kumar 3D Christmas' etc...

//========================================================================================================

//3.3 Count the number of movies made between 1980-1989 (including both the years)

function getMovieCountInRange(movies) {
  return movies.filter((movie) => movie.year >= 1980 && movie.year <= 1989)
    .length;
}

console.log(getMovieCountInRange(movies)); // 638

//========================================================================================================

// 3.4 Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
function addTag(movies) {
  return movies.map((movie) => ({ ...movie, type: getTag(movie.rating) }));
  /*thinking behind this - for each movie, I first need to copy its properties (can be done using the spread operator) 
  and then create a new property and assign a value for each movie*/
}
console.log(addTag(movies)); // title: '101 Dalmatians', year: 1996, rating: 5.7, votes: 83245, running_times: 6180, type: 'Average' etc...

function getTag(score) {
  switch (true) {
    case score >= 7:
      return "Good";
    case score >= 4 && score < 7:
      return "Average";
    case score < 4:
      return "Bad";
  }
}

console.log(getTag(4.6)); //Average

//========================================================================================================

// 3.5 Using chaining, first filter the movies array to only contain the movies rated higher than 6. Now map the movies array to only contain the rating of the movies.

function getHighRatedMovies(movies) {
  return movies.filter((movie) => movie.rating > 6);
}

console.log(getHighRatedMovies(movies));

//========================================================================================================

//3.6 Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin.
function countMoviesByKeyword(movies) {
  const count = movies.reduce((accumulator, movie) => {
    const title = movie.title.toLowerCase();
    if (
      title.includes("surfer") ||
      title.includes("alien") ||
      title.includes("benjamin")
    ) {
      accumulator++;
    }
    return accumulator;
  }, 0);
  return count;
}

console.log(countMoviesByKeyword(movies)); // 19

console.log(countMoviesByKeyword(movies));

//========================================================================================================

//3.7 Create an array of movies where a word in the title is duplicated

function findDuplicated(movies) {
  const duplicatedWordMovies = [];
  movies.forEach((movie) => {
    if (isDuplicated(movie.title.toLowerCase())) {
      duplicatedWordMovies.push(movie);
    }
  });
  return duplicatedWordMovies.map((movie) => movie.title);
}
console.log(findDuplicated(movies)); //title: 'To Be or Not to Be', title: 'To Have and Have Not', title: 'Tora! Tora! Tora!', title: 'War for the Planet of the Apes' etc...

function isDuplicated(string) {
  const arr = string.split(" ");
  const unique = [...new Set(arr)];

  return arr.join(" ") !== unique.join(" ");
}

console.log(isDuplicated("one flight over")); // false

//========================================================================================================

//3.8 Calculate the average rating of all the movies using .reduce()

function getAverageRating(movies) {
  const average =
    movies.reduce((accumulator, movie) => {
      return accumulator + movie.rating;
    }, 0) / movies.length;

  return average;
}

console.log(getAverageRating(movies)); // 6.626827026198841

//========================================================================================================

//3.9 Count the total number of Good, Average and Bad movies using .reduce()

function countRatedMovies() {
  const ratedMovies = addTag(movies);
  const arrayOfRatings = ratedMovies.map((movie) => movie.type);

  const count = arrayOfRatings.reduce(
    (accumulator, element) => {
      if (element === "Good") {
        accumulator.goodMovies++;
      } else if (element === "Average") {
        accumulator.averageMovies++;
      } else {
        accumulator.badMovies++;
      }
      return accumulator;
    },
    { goodMovies: 0, averageMovies: 0, badMovies: 0 },
  );
  return count;
}

console.log(countRatedMovies(movies)); // { goodMovies: 2602, averageMovies: 3837, badMovies: 88 }
