
console.log('\nProgram1');

const words = ["apple", "banana", "kiwi", "orange", "grape"];

const wordsLength = words.map((word)=>word.length);

console.log(wordsLength)

// Output: [5, 6, 4, 6, 5]

console.log('\nProgram2');

const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map((num)=>num*num);
console.log(squareNumbers)
// Output: [1, 4, 9, 16, 25]


console.log('\nProgram3');

const fruits = ["apple", "banana", "kiwi", "orange", "grape"];

const fruitUppercase = fruits.map((fruit)=>fruit.toUpperCase());
console.log(fruitUppercase)

// Output: ['APPLE', 'BANANA', 'KIWI', 'ORANGE', 'GRAPE']

console.log('\nProgram4');

const nums = [4, 9, 16, 25, 36];
const numsSquareRoot = nums.map((num)=>Math.sqrt(num));
console.log(numsSquareRoot)
// Output: [2, 3, 4, 5, 6]

console.log('\nProgram5');

const prefixFruits = ["apple", "banana", "kiwi", "orange", "grape"];

const addPrefix = prefixFruits.map((fruit)=>"fruit-"+fruit);
console.log(addPrefix)

// Output: ['fruit-apple', 'fruit-banana', 'fruit-kiwi', 'fruit-orange', 'fruit-grape']

console.log('\nProgram6');

const numbersArray = [1, 2, 3, 4, 5];

const addTenNumber = numbersArray.map((num)=>num+10);
console.log(addTenNumber)

// Output: [11, 12, 13, 14, 15]

console.log('\nProgram7');
const numsArray = [1, 2, 3, 4, 5];

const numberSquareAndadd = numsArray.map((num)=>num+num*num);
console.log(numberSquareAndadd)

// Output: [2, 6, 12, 20, 30]



console.log('\nProgram8');

const numsArr = [-5, 3, -8, 12, -1, 6];

const absoluteMath = numsArr.map((num)=>Math.abs(num));
console.log(absoluteMath)

// Output: [5, 3, 8, 12, 1, 6]

console.log('\nProgram9');

const phrases = ["Hello", "How are you", "Goodbye"];
const phrasesAddExclamination = phrases.map((phrase)=>phrase+"!");

console.log(phrasesAddExclamination)

// Output: ['Hello!', 'How are you!', 'Goodbye!']



console.log('\nProgram10')

const words2 = ["apple", "banana", "kiwi", "orange", "grape"];

const capitalizeThirdLetter = words2.map((word)=>{
    if(word.length>=3){
     return   word.slice(0,2)+word.charAt(2).toUpperCase()+word.slice(3)
    }
    return word
})
console.log(capitalizeThirdLetter)
 // Output: [ 'apPle', 'baNana', 'kiWi', 'orAnge', 'grApe' ]

