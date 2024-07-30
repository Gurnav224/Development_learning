/*
The filter method in JavaScript is used to create a new array containing elements that pass a certain test (condition) provided by a function. This method does not mutate the original array but instead returns a new array.

Syntax
const newArray = array.filter(callback(element[, index[, array]])[, thisArg])

callback: A function that is called for every element in the array. It should return true to keep the element, or false to remove it. It takes three arguments:
element: The current element being processed in the array.
index (optional): The index of the current element being processed in the array.
array (optional): The array filter was called upon.
thisArg (optional): Value to use as this when executing the callback.

*/
console.log('\nExercise 1')

const numbers = [1,2,3,4,5,6,7,8,9];

const evenNumbers = numbers.filter((num)=>num%2===0);

console.log(evenNumbers);

console.log('\nExercise 2');

const words = ['Apple','Mango','Banana','Orange'];

const longWords = words.filter((word)=>word.length > 5);
console.log('\nExercise 3');
console.log(longWords);
// get an array with only the positive numbers ;

const numbersArray = [2,-7,5,7,-8,-6,9];

const positiveNumbers = numbersArray.filter((num)=>num>0);

console.log(positiveNumbers);

const fruits = ['apple','kiwi','orange','grapes','melon'];

const fruitContaingA = fruits.filter((fruit)=>fruit.includes('a'));
console.log(fruitContaingA)