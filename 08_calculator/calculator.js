const add = function(num1, num2) {
	return Number(num1) + Number(num2);
};

const subtract = function(num1, num2) {
	return Number(num1) - Number(num2);
};

const sum = function(arr) {
	return arr.reduce((sum, current) => sum + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((last, current) => last * current, 1);
};

const power = function(num1, num2) {
	return Number(num1) ** Number(num2);
};

const factorial = function(num1) {
	let factorialSum = 1;
  for (let i = num1; i > 1; i--) {
    factorialSum *= i;
  }
  return factorialSum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
