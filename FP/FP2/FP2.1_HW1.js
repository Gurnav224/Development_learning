

console.log('\nProgram 1');
const nums = [12, 5, 20, 8, 15, 30];
const above10Numbers = nums.filter((num)=>num>10);
console.log(above10Numbers)

console.log('\nProgram 2');
const words = ["hello", "world", "apple", "orange", "banana"];
const filterWordsO = words.filter((word)=>word.includes('o'));
console.log(filterWordsO)

console.log('\nProgram 3');

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

function isPrime(num){
    if(num<=1) return false;
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i===0){
            return false
        }
    }
    return true
}

const primeFilter  = numbers.filter((num)=>isPrime(num));
console.log(primeFilter)


console.log('\nProgram 4');
const threeMultiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const notThreeMultiple = threeMultiples.filter((num)=>num%3!==0);
console.log(notThreeMultiple)



console.log('\nProgram 5');
const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const notDivisbleBy2And3 = numbs.filter((num)=>num%2!==0 && num%3!==0);
console.log(notDivisbleBy2And3)


console.log('\nProgram 6');
const words2 = ["APPLE", "banana", "KIWI", "ORANGE", "GRAPE"];

const filterUppercase = words2.filter((word)=>word===word.toUpperCase());

console.log(filterUppercase)

console.log('\nProgram 7');

const wordsY = ["happy", "sad", "sunny", "cloudy", "rainy"];

const filterStringY = wordsY.filter((string)=>!string.endsWith('y'));
console.log(filterStringY)


console.log('\nProgram 8');
const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mulitpleOF2And3 =  nums2.filter((num)=>num%2===0 && num%3===0);
console.log(mulitpleOF2And3)


console.log('\nProgram 9');
const feelingWords = ["happy", "sad", "sunny", "cloudy", "rainy"];

const filterWordsYandu = feelingWords.filter((word)=>word.includes('y') && word.includes('u'));
console.log(filterWordsYandu)

console.log('\nProgram 10');
const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mulitple5or3 = newNums.filter((num)=>num%3===0 || num%5===0);
console.log(mulitple5or3)