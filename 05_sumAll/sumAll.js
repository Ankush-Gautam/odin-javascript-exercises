const sumAll = function (firstNum, lastNum) {
  if (
    firstNum < 0 ||
    lastNum < 0 ||
    typeof firstNum != "number" ||
    typeof lastNum != "number"
  )
    return "ERROR";

  let sum = 0;

  // if last number is smaller
  if (lastNum < firstNum) {
    let temp = lastNum;
    lastNum = firstNum;
    firstNum = temp;
  }

  for (let i = firstNum; i <= lastNum; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
