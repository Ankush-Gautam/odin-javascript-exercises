const convertToCelsius = function (temperature) {
  // formula to C = (5/9) * F - 32
  return parseFloat(((5 / 9) * (temperature - 32)).toFixed(1));
};

const convertToFahrenheit = function (temperature) {
  // f = (9/5)C + 32;
  return parseFloat(((9 / 5) * temperature + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
