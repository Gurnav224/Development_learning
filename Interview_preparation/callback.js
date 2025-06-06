/*
    what is callback in javascript
    difference between synchronous vs aysnchronous callback
*/

// a callback function is javascript function that pass as an argument to another function. it will executed after some time . callback function are very useful
// in handling operation fetch data , connect to database, reading file


//example

function greetUser(name, cb){
    cb(name)
}

function printMsg(name){
    console.log("good morning " + name)
}

greetUser('anurag', printMsg)


// Synchronous Callback

// A synchronous callback is executed immediately during the execution of the function it is passed to. The program waits for it to finish before moving on.

function processData(data, callback) {
  callback(data); // executed right away
}

processData("Hello", function (msg) {
  console.log(msg); // Hello
});


//  Asynchronous Callback

// An asynchronous callback is executed later, after the main function is done — usually after some async operation (like setTimeout, fetch, DB call, etc.). JavaScript does not wait for it.

function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData(function (msg) {
  console.log(msg); // runs after 1 second
});

console.log("Request sent");
