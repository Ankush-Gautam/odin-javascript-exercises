const findTheOldest = function (people) {
  let oldestPersonAge = calcAge(people[0].yearOfBirth, people[0].yearOfDeath);
  let oldestPerson = people[0];

  for (let i = 0; i < people.length; i++) {
    if (
      calcAge(people[i].yearOfBirth, people[i].yearOfDeath) > oldestPersonAge
    ) {
      oldestPersonAge = calcAge(people[i].yearOfBirth, people[i].yearOfDeath);
      oldestPerson = people[i];
    }
  }
  return oldestPerson;
};

function calcAge(birthYear, deathYear) {
  if (deathYear != undefined) return deathYear - birthYear;

  const currentYear = new Date();
  return currentYear.getFullYear() - birthYear;
}

// Do not edit below this line
module.exports = findTheOldest;
