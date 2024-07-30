
console.log('\nProgram 1');
const nums = [12, 5, 20, 7, 8, 15, 30];

const evenNumber = nums.filter((num)=>num%2===0);
console.log(evenNumber);


console.log('\nProgram 2');
const words = ["kiwi", "mango", "apple", "orange", "banana"];

const wordsLengthMoreThan5 = words.filter((word)=>word.length>5);
console.log(wordsLengthMoreThan5);


console.log('\nProgram 3');
const words2 = ["Sun", "Moon", "Star", "Planet", "Saturn"];
const startingWithS = words2.filter((word)=>word.startsWith('S'));
console.log(startingWithS)


console.log('\nProgram 4');
const threeMultiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const notThreeMultiple = threeMultiples.filter((num)=>num%3!==0);
console.log(notThreeMultiple)


console.log('\nProgram 5');
const numbs = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

const divisibleBy7And3 = numbs.filter((num)=>num%3===0 && num%7===0);
console.log(divisibleBy7And3)

console.log('\nProgram 6');
const words3 = ["APPLE", "banana", "KIWI", "orange", "GRAPE"];
const lowercaseLetter = words3.filter((word)=>word===word.toLowerCase());
console.log(lowercaseLetter)


console.log('\nProgram 7')
const wordsY = ["happy", "sad", "sunny", "cloudy", "rainy"];

const filterLetterNotContainA = wordsY.filter((word)=>!word.includes('a'));
console.log(filterLetterNotContainA)

console.log('\nProgram 8')
const numsOnetoTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filter2Or3 = numsOnetoTen.filter((num)=>num%2===0 || num%3===0);
console.log(filter2Or3)

console.log('\nProgram 9');
const feelingWords = ["happy", "sad", "weepy", "sleepy", "rainy"];
const wordsAorY = feelingWords.filter((word)=>word.includes('a') || word.includes('y'));
console.log(wordsAorY)


console.log('\nProgram 10');
const newNums = [41, 12, 31, 14, 52, 6, 27, 38, 29, 100];


const numBW20TO40 = newNums.filter((num)=>num>=20 && num<=40);

console.log(numBW20TO40)