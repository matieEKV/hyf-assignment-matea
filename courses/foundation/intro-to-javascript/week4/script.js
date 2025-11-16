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
  console.log(eventDayNumber, " number");
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
