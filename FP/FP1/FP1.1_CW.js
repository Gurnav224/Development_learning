// map method

// multiplying array with 2;

const numbers = [1,2,3,4,5];
const multiplyBy2 = numbers.map((number)=>number*2);
console.log(multiplyBy2)


// doubling the array 
const array = [2,4,6,8 , 10];
const doubleArray = array.map((num)=>num*2);
console.log(doubleArray)


// capitalize first character of each fruit

const wordsArray = ['apple','mango','orange','grapes'];
const capitalizeWordsArray = wordsArray.map((word)=>word.charAt(0).toUpperCase() + word.slice(1))
console.log(capitalizeWordsArray)

// .charAt()  method returns the character at the specified index in a string.
// .toUpperCase() method convert the string character to Captial format
// .slice() to cut the portion of string or array from index 
// .toString() convert to string format

// change number array to string

const numbericArray = [1,2,3,4,5];
const stringArray = numbericArray.map((num)=>num.toString());

console.log(stringArray)
/*
The .map() array method in JavaScript is used to create a new array by applying a given function to each element of an existing array. Here's a simple breakdown:

Syntax: array.map(callbackFunction)
Purpose: Transform each element of the array and return a new array with the transformed elements.
Parameters:
callbackFunction: A function that is called for each element in the array. This function takes three arguments:
currentValue: The current element being processed in the array.
index (optional): The index of the current element being processed.
array (optional): The array map was called upon.
Returns: A new array with the transformed elements.

Key Points:
The original array is not modified.
A new array is returned.
The callbackFunction is applied to each element of the original array.
*/