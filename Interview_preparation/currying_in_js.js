// currying: the process of transforming a function with multiple arguments into a sequence of functions, each taking a single argument.

// Example of a simple function
function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(5, 10, 15)); // 30

// currying function example
function add(a) {
  return function(b) {
    return function(c){
        return a + b + c;
    }
  };
}

console.log(add(5)(10)(15)); // 30


// destructuring in js :  extracting values from arrays or properties from objects into distinct variables

// async / await : // async function is a function that always returns a promise
// await is used to wait for a promise to resolve or reject

// hoisting :  hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase

// spread operator :  the spread operator is used to expand an iterable (like an array) into more elements

// setTimeout and setInterval :
// setTimeout is used to execute a function after a specified delay
// setInterval is used to repeatedly execute a function at specified intervals


// event loop :  the event loop is a mechanism that allows JavaScript to perform non-blocking I/O operations, despite being single-threaded . check call stack, callback queue, if any asynchronous tasks are pending, it will delegate them to the event loop to be executed later