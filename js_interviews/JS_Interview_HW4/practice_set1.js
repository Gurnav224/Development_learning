// question 1
let data = new Promise((resolve, reject) => {
  const dataReceived = false;
  if (dataReceived) {
    resolve("Data Fetched successfully");
  } else {
    reject("Failed to fetch data");
  }
});

// data
// .then((data) => console.log(data))
// .catch((error) => console.error(error));

// question 2:

let number = 32;

let checkNumber = new Promise((resolve, reject) => {
  let result = number > 10;
  if (result) {
    resolve("Number is valid");
  } else {
    reject("Number is too small");
  }
});

//   checkNumber
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err))

// question 3;

// 1. Basic Promise with proper error handling
const userLoggedIn = new Promise((resolve, reject) => {
  let isLoggedIn = true;
  if (isLoggedIn) {
    resolve("User is logged in");
  } else {
    reject(new Error("User is not logged in"));
  }
});

// Using .then() and .catch()
// userLoggedIn
//   .then((res) => console.log(res))
//   .catch((err) => console.error("Error:", err.message));


  const userData = () =>  new Promise((resolve, reject) => {
     let userExists = false;
     if(userExists){
        resolve({ name: "Alice", age: 25 })

     }
     else{
        reject("User not found")

     }
  })

// userData()
// .then((res) => console.log(res))
// .catch((err) => console.log(err))


let delayNumber = new Promise((resolve) => {
    setTimeout(() => {
resolve("number is 42")
    },2000)
})

// delayNumber.then((num) => console.log(num))


let delayNumber2 = new Promise((_, reject) => {
    setTimeout(() => {
        reject('number is 500')
    },3000)
})

// delayNumber2.catch((err) => console.error(err))

const checkPassword = (password) => {
    const check = password === "12345";
    return new Promise((resolve, reject) => {
        if(check){
            resolve("Password accepted")
        }
        else{
            reject("Invalid Password")
        }
    })
}

// checkPassword("12345")
// .then((res) => console.log(res))
// .catch((err) => console.error(err))



const checkEmail = (email) => {
    return new Promise((resolve, reject)  => {
        if(email.includes("@")){
            resolve("email is valid")
        }
        else{
            reject("email is invalid")
        }
    })
}

// checkEmail("chaudhary@gmail")
// .then((res) => console.log(res))
// .catch((err) => console.error(err));

const fetchTemperature = (temperature) => {
    return new Promise((resolve, reject) => {
        if(temperature > 15){
    resolve("Temperature is above 20 C")

        }
        else{
    reject("Temperature too low")

        }
    })
}

fetchTemperature(25)
.then((res) => console.log(res))
.catch((err) => console.error(err))

process.on("unhandledRejection", (reason, promise) => {
    // console.error("Unhandled Rejection:", reason);
});
