const delayedGreeting = () => {
  setTimeout(() => {
    console.log("Hello, welcome to my portfolio!");
  }, 2000);
};

// delayedGreeting();

const delayedAddition = (num1, num2) => {
    setTimeout(() =>{
        console.log(num1 + num2)
    },4000)
}

// delayedAddition(2,3);

const delayedAlert = (msg) => {
    setTimeout(() => {
        console.log(msg)
    },300)
}

// delayedAlert("Hello, world!");



const fakeFetch = (msg , shouldSucceed) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(shouldSucceed){
                    resolve('message from server ' + msg)
                }
                else{
                    reject('error from the server ' + msg)
                } 
            }, 3000);
           
        })
}

fakeFetch("hi", false)
.then((res) => console.log(res))
.catch((error) => console.error(error))