const fibonacci = function (n) {
  let index = parseInt(n);
  if (index == 0) return 0;
  if (index < 0) return "OOPS";

  let firstNum = 1;
  let secondNum = 1;
  let fibArray = [firstNum, secondNum];
  let sum = 0;

  for (let i = 2; i < index; i++) {
    sum = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
    fibArray.push(sum);
  }

  return fibArray[index - 1];
};

// Do not edit below this line
module.exports = fibonacci;
