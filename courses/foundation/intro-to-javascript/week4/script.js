// Smart-ease Goes Global! - Flight booking fullname function,added Formal fullname

function getFullName(firstName, lastName, useFormalName = false) {
  return !useFormalName
    ? `${firstName} ${lastName}`
    : `Lord ${firstName} ${lastName}`;
}

const fullName1 = getFullName("Benjamin", "Hughes", true);
const fullName2 = getFullName("Jane", "Doe");

console.log(fullName1, fullName2); // Benjamin Hughes Jane Doe
