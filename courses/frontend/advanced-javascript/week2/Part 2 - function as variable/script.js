//2.1 Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.

const arrayOfFunctions = [getOne, getTwo, getThree];

function getOne() {
  console.log(1);
}

function getTwo() {
  console.log(2);
}

function getThree() {
  console.log(3);
}

arrayOfFunctions.forEach((element) => element());

//2.2 Create a function as a const and try creating a function normally. Call both functions
const variableFunction = function () {
  console.log("I was called from a variable");
};

function usualFunction() {
  console.log("I was called from a usual function");
}

variableFunction();
usualFunction();

//2.3 Create an object that has a key whose value is a function. Try calling this function.

const objectWithFunctionValue = {
  objectMethod: () => {
    console.log("I was called from within an object");
  },
};

objectWithFunctionValue.objectMethod();
