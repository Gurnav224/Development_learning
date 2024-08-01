console.log("FP3.1_HW1");
console.log('\nProgram 1');

const words = ["apple", "banana", "kiwi", "orange", "grape"];

const maxLengthWord = words.reduce((accumulator,currentValue)=>{
   return currentValue.length > accumulator.length ? currentValue : accumulator
});

console.log(maxLengthWord)


console.log('\nProgram 2');
const numbers = [10, 5, 8, 20, 15];


const minimumNumber = numbers.reduce((accumulator,currentValue)=>currentValue<accumulator?currentValue:accumulator);
console.log(minimumNumber)

console.log('\nProgram 3')
const wordsLength = ["apple", "banana", "kiwi", "orange", "grape"];

const completeString = wordsLength.reduce((accumulator,currentValue)=>accumulator+currentValue,'').length;

console.log(completeString)


console.log('\nProgram 4');
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// solution -1

const countOfevenNumber = nums.reduce((counter,value)=>value%2===0?counter+1:counter,0)

console.log(countOfevenNumber)

// solution - 2

const countOfevenNumber2 = nums.reduce((arrayOfEven,currentValue)=>currentValue%2===0?[...arrayOfEven,currentValue]:arrayOfEven,[]).length;

console.log(countOfevenNumber2)

console.log('\Program 5');

const wordsCaps = ["hello", "world", "how", "are", "you"];

const capitalizeString = wordsCaps.reduce((string,currentWord)=>string+currentWord.charAt(0).toUpperCase()+currentWord.slice(1)+" ",'');

console.log(capitalizeString)

// Output: Hello World How Are You

console.log('\nProgram 6')

const numsAvg = [10, 15, 20, 25, 30];

const AverageOfNum = numsAvg.reduce((totalSum,currentNum)=>totalSum+currentNum,0)/numsAvg.length;
console.log(AverageOfNum)

// Output: 20

console.log('\nProgram 7');
const numbers2 = [1, 2, 3, 4, 5];
const squareSum = numbers2.reduce((totalSum,currentNum)=>totalSum+currentNum*currentNum,0);
console.log(squareSum)
// Output: 55

console.log('\nProgram 8');
const stationeryWords = ["pen", "notebook", "eraser", "notebook", "pencil", "notebook", "pencil"];



const occurrencesOfword = stationeryWords.reduce((wordObj,currentWord)=>{
    wordObj[currentWord] = (wordObj[currentWord] ||  0) +1;

    return wordObj
},{});

console.log(occurrencesOfword);


console.log('\nProgram 9');

const wordsLetter = ["apple", "banana", "kiwi", "orange", "grape"];

const wordKeyCount = wordsLetter.reduce((wordObj,key)=>{

    wordObj[key.charAt(0)] = (wordObj[key.charAt(0)] ||0) +1;


    return wordObj
},{});

console.log(wordKeyCount);


console.log('\nProgram 10');


const numPositive = [-2, 3, 4, -5, 6];


const productsOfPositive =  numPositive.reduce((product,currentNumber)=>currentNumber>0?product*currentNumber:product,1);

console.log(productsOfPositive)



