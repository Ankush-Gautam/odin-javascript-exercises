const palindromes = function (string) {
  let array = string.toLowerCase().split(""); //converting to array with lowercase letters

  let punctuations = [
    ",",
    ".",
    "/",
    "~",
    "!",
    "-",
    "_",
    "#",
    "%",
    "^",
    "&",
    "*",
    " ",
  ];

  let filteredArray = array.filter((item) => !punctuations.includes(item));

  let originalFilteredString = filteredArray.join("");
  let reversedString = filteredArray.reverse().join("");

  console.log(originalFilteredString);
  console.log(reversedString);

  return originalFilteredString === reversedString;
};

palindromes("Animal loots foliated detail of stool lamina.");

// Do not edit below this line
module.exports = palindromes;
