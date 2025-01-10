

const order =new Promise((resolve, reject) => {
    let isValid = false;
    if(isValid){
        resolve('promise is resolve successfully')
    }
    else{
        reject('failed to resolved ')
    }
})

order
.then((arg) => console.log(arg))
.catch((error) => console.error(error))

// a promise is an object that handle asynchornous operations;
// promise have three state , pending, fullfilled, reject ;
// promise will take a callback function as argument inside 
// callback take two parameter function resolve and reject
// check the condition if it will resolve return the result
// failed to resolve return the reject 
