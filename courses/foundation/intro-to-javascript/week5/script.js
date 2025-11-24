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
