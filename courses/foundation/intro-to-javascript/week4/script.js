// Smart-ease Goes Global! - Flight booking fullname function,added Formal fullname

function getFullName(firstName, lastName, useFormalName = false) {
  return !useFormalName
    ? `${firstName} ${lastName}`
    : `Lord ${firstName} ${lastName}`;
}

const fullName1 = getFullName("Benjamin", "Hughes", true);

const fullName2 = getFullName("Jane", "Doe");

console.log(fullName1, fullName2); // Benjamin Hughes Jane Doe

/*But what if the person is a woman? Describe how you would fix the getFullName so it also works for women

- instead of passing a boolean value, we could pass a string with a requested formal name. */
//---------------------------------------------------------

//Event application for a calendar

function getEventWeekday(daysFromNow) {
  const date = new Date();
  let eventDayNumber = (date.getDay() + daysFromNow) % 7; //make sure to wrap the count to 0 after 7 days

  let eventDay = "";

  switch (eventDayNumber) {
    case 0:
      eventDay = "Sunday";
      break;
    case 1:
      eventDay = "Monday";
      break;
    case 2:
      eventDay = "Tuesday";
      break;
    case 3:
      eventDay = "Wednesday";
      break;
    case 4:
      eventDay = "Thursday";
      break;
    case 5:
      eventDay = "Friday";
      break;
    default:
      eventDay = "Saturday";
  }
  return eventDay;
}

console.log(getEventWeekday(13));

//---------------------------------------------------------

//Weather wear

function getClothesSuggestion(temperature) {
  let clothes;

  if (temperature < -30) {
    clothes = "Clothes for the North Pole";
  } else if (temperature < -30 && temperature < 0) {
    clothes =
      "Snow suit, thermo socks,thermo undergarment, hat, gloves and scarf";
  } else if (temperature < 1 && temperature < 12) {
    clothes =
      "Thinner winter jacket, pants, long sleeved shirt. If windy wear hat and gloves.";
  } else if (temperature < 13 && temperature < 20) {
    clothes = "Long sleeved shirt, pants.";
  } else if (temperature < 21 && temperature < 30) {
    clothes = "Light breathable clothes - t-shirt, shorts.";
  } else if (temperature < 31 && temperature < 40) {
    clothes =
      "Long sleeved shirt, light pants to protect against UV. If evening wear a dress.";
  } else {
    clothes = "Special clothes that will protect against very high UV index";
  }

  return clothes;
}

const clothesToWear = getClothesSuggestion(45);

console.log(clothesToWear);
