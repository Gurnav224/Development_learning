

// higher order function in javascript:
// 1. take a  function as an argument
// 2. return a function also

// example 1

function greet(name) {
  return `Hello, ${name}`;
}

function logGreeting(fn, name) {
  console.log(fn(name)); // HOF takes `greet` as input
}

logGreeting(greet, "Gurnav"); // Output: Hello, Gurnav



// example 2


function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10
