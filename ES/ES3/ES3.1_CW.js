// default parameters

// write an arrow function with default params to add two numbers

const addNumbers = (a,b=2)=>a+b;
console.log(addNumbers(5));


// write an arrow function with default params to multiply two numbers

const multiply = (a,b=3)=>a*b;
console.log(multiply(2,2))

// write an arrow function with default params to concatenate two strings

const greet = (greeting,name='Rahul')=>greeting + " "+name;
console.log(greet('Hello'))

// write an arrow function with default params to concatenate two strings

const greetUser = (name="Abhi",greet="hello ")=> greet+ name;
console.log(greetUser())

// write an arrow function with default params to add three numbers

const add = (a,b,c=3)=>a+b+c;
console.log(add(2,3))