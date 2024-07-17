

// question 1

const checkOdd = (num)=> num%2!==0;
console.log(checkOdd(32))

// question 2

const printStringLength = str => str.length;
console.log(printStringLength('hello how are you'))

// question 3

const capitalizeString = str => str.toUpperCase();
console.log(capitalizeString('hello'));

// question 4

const printCurrentDate = ()=> new Date().toLocaleDateString();
console.log(printCurrentDate());

// question 5;

const printCurrentTime = ()=>{
    let now = new Date();
    return now.getHours()+ ":" + now.getSeconds() + ":" + now.getSeconds()
};

console.log(printCurrentTime());

// question 6

const fahrenheitToCelsius = (fahrenheit)=>(fahrenheit-32)/(9/5);

console.log(fahrenheitToCelsius(332));


// question 7

const isEmptyString = (str)=>str===""

console.log(isEmptyString('hello'))
console.log(isEmptyString(''))

// question 8

const randomNumber = ()=>Math.floor(Math.random()*30);
console.log(randomNumber())

// question 9;

const randomSquareRoot = ()=>Math.sqrt(Math.floor(Math.random()*100));
console.log(randomSquareRoot())

// question 10;

const printStringLowerCase = (str)=>str.toLowerCase();

console.log(printStringLowerCase('WORLD'))