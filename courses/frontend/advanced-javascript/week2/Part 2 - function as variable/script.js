//2.1

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

//2.2
const variableFunction = function () {
  console.log("I was called from a variable");
};

function usualFunction() {
  console.log("I was called from a usual function");
}

variableFunction();
usualFunction();

//2.3

const objectWithFunctionValue = {
  objectMethod: () => {
    console.log("I was called from within an object");
  },
};

objectWithFunctionValue.objectMethod();
