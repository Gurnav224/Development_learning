/* The reduce method in JavaScript is used to iterate over an array and reduce it to a single value. It executes a reducer function on each element of the array, resulting in a single output value. This method is particularly useful for summing values, accumulating results, or combining elements in various ways.

Syntax
javascript
Copy code
array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
Parameters
callback: A function to execute on each element in the array. It takes four arguments:
accumulator: The accumulated result of the previous iterations.
currentValue: The current element being processed in the array.
currentIndex (optional): The index of the current element being processed.
array (optional): The array reduce was called upon.
initialValue (optional): A value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element in the array will be used and skipped. */

// sum of numbers in an array

const array = [1,2,3,4,5];
let sum = 0;

for(let i=0; i<array.length; i++){
    sum += array[i]
}

console.log(sum);

// sum using reduce

let sumOfarr = array.reduce((acculmator,currentValue)=>acculmator+currentValue,0);
console.log(sumOfarr)

// concatenate into a single string

const stringArray = ["Hello", " World", "!"]

const concatenatedString = stringArray.reduce((acculmator,currentValue)=>acculmator+currentValue,'');
console.log(concatenatedString)

// find the maximum number in an array

const numbersArray = [10, 5, 8, 20, 15,50]


let maxNum = numbersArray.reduce((acculmator,currentValue)=>currentValue>acculmator ? currentValue : acculmator);

console.log(maxNum)

// occurrence of each word in an array

const fruits = ["apple", "banana", "apple", "orange", "kiwi", "kiwi"]

const occurrenceWord = fruits.reduce((acculmator,currentValue)=>{
   acculmator[currentValue] = (acculmator[currentValue] || 0) + 1;

   return acculmator
},{})

console.log(occurrenceWord)