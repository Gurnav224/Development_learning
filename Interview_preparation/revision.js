// - Set Interval vs Set Timeout
// - Event loop
// - What are some ES6 Features?

// setInterval will execute a function repeatedly after a certain time interval
// setTimeout will execute a function once after a specified delay

	setTimeout(() => console.log("Hi"), 1000);

  setInterval(() => console.log("Hi"), 1000);


  /*
The event loop is the mechanism that checks the call stack and the callback queue.
If the call stack is empty, it checks the callback queue, and if there are any pending asynchronous tasks,
it delegates those tasks into the call stack for execution.
this the main working of event loop
  */

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");


// es6 features 
/*

let and const
arrow function 
template literals
promise 
destructuring
default paramter
rest/spread

*/