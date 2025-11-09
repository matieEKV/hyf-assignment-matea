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
