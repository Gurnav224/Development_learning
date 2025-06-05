
/*
A promise is an object in the javascript that represent 
eventual completion (or failue) of an asynchronous operation and its resulting value

a promise allow us write asynchronous code in a cleaner and more manageable way , avoiding callback hell

promise have three state 
pending: code in progress
fullfiled: code excuted and promise is setlled
rejected: promise is rejected code failed


promise provide method like .then to handling success and 
.catch for handling errors


*/


const myPromise = new Promise((resolve, reject) => {
    let success = false
    if(success){
        resolve('promise is resolved')
    }
    else{
        reject('promise is rejected')
    }
})

myPromise
.then((data) => console.log(data))
.catch((error) => console.log(error))


fetch('http://api.example')
.then(res => res.json)
.then(data => console.log(data))
.catch((error) => console.log(error))