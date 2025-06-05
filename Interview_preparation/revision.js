/*
what is scope  . how many types of these  and how does it works
what is closure , how does it works
what is promise in javascript .  how does it works
*/

// what is scope in javascript
// scope in javascript is the context in which variable are visibile or accessible or reference . if variable is not in the context . it is not available to use

// javascript have different types of scope 

// global scope : global scope variable and function are accesible everywher in the code

let name = 'arjun'

console.log('global scope',name)

{
console.log('local scope',name)

let another = 'i am another variable'

console.log(another)
}

// console.log(another)


// 2 modules scope or file scope:  means variable and function define in file are only accessible in that file only 


// 3 function scope : variable defined inside a function are only accessible in their
// scope

function greetUser(){
    let name = 'priya';
    return 'Good morning ' + name
}

console.log(greetUser())


// block scope : variable and function are declared inside a scope are only 
// accessible that scope only

{
    let isVisible = true;

}



// clsoure is the combination of function and lexical enviroment within was function declared
// in simple term , inner function remeber the variable of their lexical scope


function outer(){
    let counter = 0;

    return function() {
        return counter++
    }
}

const counterIn = outer()

console.log(counterIn())
console.log(counterIn())
console.log(counterIn())



// promise in javascript are used to handle asynchronous task . it is an object in javascript that respresnt evetual completion or rejection of asynchronous task
// a better handling task that take time like fetching data from the server

// promise have three state
// pending: task in progress
// fullfilled : task is completed
// rejected : task is rejected

// code 

const myPromise = new Promise((resolve, reject) => {
     let success = false;
     if(success){
        resolve('Task is resolved')
     }
     else{
        reject('task is rejected')
     }
})

myPromise.then((data) => console.log(data))
.catch((err) => console.log(err))