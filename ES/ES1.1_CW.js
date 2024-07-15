let numbericVariable = 42;
console.log(numbericVariable)

let stringVariable = 'Hello, World!';
console.log(stringVariable);

let firstName = 'gurnav';
let lastName = 'chaudhary';

let fullName = firstName+' '+lastName;

console.log(fullName);

let numberVariable  = 10;
console.log("before assign",numberVariable);
// (reassign) now again also we can assign value to numberVariable;

console.log("after reassign",numbericVariable)

// we can do multiple calculations with help of let

let num1 = 10;
let num2 = 24;

let sum = num1+num2;
let difference = num1-num2;

console.log('sum',sum)
console.log('difference',difference);


let newName ;
newName = 'Gurnav';

console.log(newName)



// now we learning about the const
console.log("================== Const Variable ==============")

const   numberConst  = 10;
console.log(numberConst);

const stringConst = 'hello , how are you';
console.log(stringConst)


// difference between let and const is that let can be reassigned but const cannot be reassigned

/* 
cannot do in const
stringConst = "I am reassigning it";
console.log(stringConst)

*/

// we can't assign any value later and we can't left const variable empty

// const newConstVariable; // syntaxError: Missing
// initalizer in const declaration

// for const we have to assign value at the declaration of variable itself only


const newConstantVariable = "I am const variable";
console.log(newConstantVariable)
// let explore some more things about const


const newArr = [1,2,3,4,5];

// newArr = [4,5,7,7]  // typeError: Assignment to constant variable

// console.log(newArr)




let obj = {
    name:"Avinash",
    age:25
}


console.log(obj);

obj.name = "Gurnav";

console.log(
obj
)

/*
now why do we need to declear variable using const.
 1. we can't reassign value to const variable
 2. we can't change the value of const variable
 3. we can't assign any value to const variable
 4. we can't left const variable empty
 // we can do same things with let
*/