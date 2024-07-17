
// Arrow function with no params;

// create a arrow function that generate random number 1 to 10;

const generateNumber = ()=> Math.floor(Math.random()*10);
console.log(generateNumber())


// arrow functions that returns current date

const getCurrentDate = ()=> new Date().toLocaleDateString();

console.log(getCurrentDate());

// Arrow functions with one param
// Arrow functions to get the square of num

const square = num => num**2;

console.log(square(10))

// arrow function to check if number is positive

const isPositive = num => num>0;

console.log(isPositive(2))
console.log(isPositive(-2))

// arrow function to check if number is even

const checkIsEven = num => num%2===0;

console.log(checkIsEven(2))
console.log(checkIsEven(3))