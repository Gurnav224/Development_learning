/*
what is scope and how many types of them 
*/


// lexical scope or scope chaing

{
   let name = 'abhi';
   {
    console.log(name)
   } 
}

// global scope 

let a = 5;

console.log(a)


// function scope

function greet(){
    let username = 'arjun'
    return 'good morning' + username
}

greet()

// console.log(username)

// block scope
{
    let PI = 3.14
}

console.log(PI)