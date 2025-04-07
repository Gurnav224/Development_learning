


// a promise is an object that handle asynchornous operations;
// promise have three state , pending, fullfilled, reject ;
// promise will take a callback function as argument inside 
// callback take two parameter function resolve and reject
// check the condition if it will resolve return the result
// failed to resolve return the reject 



let isGettingPlaced = new Promise((resolve, reject) => {
        let isPlaced = false;
     if(isPlaced){
        resolve("Hurrah!, You are Selected ")
     }
     else{
        reject('Apply more , learn more')
     }
})


isGettingPlaced
.then((res) => console.log(res))
.catch((err) => console.error(err))



fetch('https://api.escuelajs.co/api/v1/products/1')
.then((res) => res.json())
.then((data) => console.log(data))
.catch((err) => console.error(err))