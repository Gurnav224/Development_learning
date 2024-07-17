
// question 1;

const areaOfTriangle = (a,b)=> (1/2)*a*b;
console.log(areaOfTriangle(5,6));

// question 2;

const checkDivisiblility = (num1,num2)=>num1%num2===0;

console.log(checkDivisiblility(15,5));


// question 3

const checkDifference = (num1, num2)=>num1-num2;
console.log(checkDifference(15,5))

// question 4

const printMessage = (str1,str2,str3)=>str1+str2+str3;

console.log(printMessage('I ',' am',' happy'))


// question 5;

function isBigger(a,b){
    return a>b
}

console.log('Is 2 bigger than 3?',isBigger(2,3))

// question 6;

const printProduct = (a,b)=>a*b;
console.log(printProduct(2,6))

// question 7;


const getGreeting = (greeting,name)=>greeting + name;

console.log(getGreeting('Hello ',' John'))