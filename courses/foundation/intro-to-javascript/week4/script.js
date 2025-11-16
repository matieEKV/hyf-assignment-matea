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
