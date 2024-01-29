const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	const answer = arr.reduce((accumulator, curr) => accumulator + curr, 0);
  return answer;
};

const multiply = function(arr) {
  return arr.reduce((accumulator, curr) => accumulator * curr, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  let answer = 1
	while (num > 1) {
    answer *= num;
    num--;
  };
  return answer;
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
