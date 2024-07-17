
// arrow function that takes a string and return an object;

const createStringObj = (str)=>({text:str});
console.log(createStringObj('hello'))


// arrow function that takes two numbers and return an object with sum and product of these numbers

const calculateSumAndProduct = (a,b)=>({sum:a+b,product:a*b});
console.log(calculateSumAndProduct(2,3))

// arrow function that takes a person's name and age and returns object with properties

const createPersonObject = (name,age)=>({name:name,age:age});
console.log(createPersonObject("alice",25))