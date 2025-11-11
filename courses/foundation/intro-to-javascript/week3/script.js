// Age-ify (A future age calculator)
const yearOfBirth = 1989;
const yearOfFuture = 2048;
const age = yearOfFuture - yearOfBirth;

console.log("You will be " + age + " years old in " + yearOfFuture);

// Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;

const shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears === true) {
  console.log(
    `Your dog will be ${dogYear * 7} dog years old in ${dogYearFuture}`
  );
} else {
  console.log(
    `Your dog will be ${dogYear} human years old in ${dogYearFuture}`
  );
}

//Housey pricey (A house price estimator)

const estimatedHousePricePeter = 8 * 10 * 10 * 2.5 * 1000 + 100 * 300;
const actualHousePricePeter = 2500000;
const estimatedHousePriceJulia = 5 * 11 * 8 * 2.5 * 1000 + 70 * 300;
const actualHousePriceJulia = 1000000;

console.log(
  "Is it true that the house Peter wants is overpriced? " +
    (actualHousePricePeter > estimatedHousePricePeter)
);
console.log(
  "Is it true that the house Julia wants is overpriced? " +
    (actualHousePriceJulia > estimatedHousePriceJulia)
);

//Ez Namey (Startup name generator)

const firstWords = [
  "Super",
  "Funky",
  "Exquisite",
  "Magical",
  "Thorough",
  "Adequate",
  "Vivacious",
  "Thunderous",
  "Brazen",
  "Ardent",
];
const secondWords = [
  "Solutions",
  "Problem-solvers",
  "Sleuth",
  "Remedies",
  "Enterprise",
  "Conglomerate",
  "Disentangler",
  "Genius",
  "Analyzer",
  "Decoder",
];

const randomNumber = Math.floor(Math.random() * 10);

const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];

console.log(
  `The startup: ${startupName} contains ${startupName.length} characters`
);
