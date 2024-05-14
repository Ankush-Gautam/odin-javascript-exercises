const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function ([...numArray]) {
  return numArray.reduce((sum, num) => sum + num, 0);
};

const multiply = function ([...numArray]) {
  return numArray.reduce((mul, num) => mul * num, 1);
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (num) {
  if (num == 0 || num == 1) return 1;

  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
