
// question 1
let age = 20;
console.log('original age',age)
age = 22;
console.log('updated age',age)

// question 2
let num1 = 20;
let num2 = 5;

let product = num1* num2;
console.log('prouduct num1 and num2',product)
let difference = num1-num2;

console.log('difference of num1 and num2',difference)

// question 3

// const numberOfGates = 5;
// numberOfGates = 6;

// console.log(numberOfGates)

// TypeError: Assignment to constant variable.
// question 4
let obj = {
    name:"Gurnav",
    age:28
}

console.log('original person',obj);

obj.age = 31;

console.log('updated person',obj)


// question 5;

const color = { primary: "red", secondary: "blue" }

console.log('original color',color)

color.tertiary = 'green';

console.log('updated color',color)

// question 6

const numbers = [1, 2, 3, 4];

numbers[2] = 99;

console.log(numbers)

// question 7

const coordinates = { x: 10, y: 20 }
console.log(coordinates)
const newCoordinates = { x: 30, y: 40 }
// coordinates = newCoordinates


// question 8
let obje = { a: 1, b: 2 }
const obj2 = { a: 3, b: 4 }
obje = obj2

console.log(obje)
console.log(obj2)


// question 9

// const numericVar = 2
//   numericVar = 3 // typeerror Assignment to constant variable


// question 10

const greeting = "Hello"
console.log(greeting)
let name = " Jay"
name = " Shawn"
console.log(greeting + name)

// output "hello Shawn"