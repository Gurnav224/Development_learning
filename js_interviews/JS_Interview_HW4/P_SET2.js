

const delayGreeting = () => {
    setTimeout(() => {
        console.log('Hello, welcome to my portfolio!')
    },2000)
}


delayGreeting()


const delayAddition = (number1, number2) => {
    setTimeout(() => {
        console.log(number1 + number2)
    },4000)
}

delayAddition(2,4)


function delayedAlert(message, time){
    setTimeout(() => {
        console.log(message)
    },time)
}


delayedAlert('Hello, world!', 2000);




const fakeFetch = (msg, shouldSucceed) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldSucceed) {
          resolve(`message from server: ${msg}`);
        }
        reject(`error from server: ${msg}`);
      }, 3000);
    });
  };
  
  // Your Code here
  
fakeFetch('good evening', true)
  .then(res => console.log(res))
  .catch(err => console.error(err)) 