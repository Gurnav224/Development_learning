
// program 1
const getUserName = (firstName,callback)=>{
    let message = 'Hello '+firstName;
    callback(message)
}

const greetUser = (message)=>{
    console.log(message)
}

getUserName('John',greetUser)


// program 2

const calculateAge = (birthYear,callback)=>{
    let currentYear = new Date().getFullYear()
    let age = currentYear-birthYear

    callback(age)
}

const displayAge = (age)=>{
    console.log(`Current Age: ${age}`)
}

calculateAge(2002,displayAge)

// program 3

const generateUsername = (firstName,callback)=>{
    let username = firstName+"_user"

    callback(username)
}

const logUser = (username)=>{
    console.log(`our username is: ${username}`)
}


generateUsername('Abhishek',logUser)


// program 4

const checkTemperature = (celsius,callback)=>{
 const fahrenheit = (celsius*(9/5))+32;
 callback(fahrenheit)
}

const displayTemperatureMessage  = (temperature)=>{
    if(temperature>86){
        console.log("Hot")
    }
    else if(temperature>50){
        console.log("Moderate")
    }
    else{
        console.log("Cold")
    }
}


checkTemperature(25,displayTemperatureMessage )


// program 5



// function processArray(numbers, callback) {
//     const result = [];
//     for (let i = 0; i < numbers.length; i++) {
//       result.push(callback(numbers[i]));
//     }
//     console.log(result);
//   }
//   // Function to square a number
//   function squareNumber(num) {
//     return num * num;
//   }
//   // Array of numbers
//   const numbersArray = [1, 2, 3, 4, 5];
//   // Process the array and square each number
//   processArray(numbersArray, squareNumber);


const processArray = (numbers,callback)=>{
    const result = [];
    for(let i=0; i<numbers.length; i++){
        result.push(callback(numbers[i]))
    }
    console.log(result)
}

const squareNumber  = (num)=>{
    return num*num
}

const numbersArray = [1, 2, 3, 4, 5];
processArray(numbersArray, squareNumber);


// program 6

const processArraySum = (numbers,callback)=>{
    let result = [];

    for(let i=0; i<numbers.length; i++){
        result.push(callback(numbers[i]))
    }
    console.log(result)
}

const doubleNumber = (num)=>{
    return num*2
}

// Array of numbers 
const numbersArray2 = [2, 4, 6, 8, 10]; 
// Process the array and double each number 
processArraySum(numbersArray2, doubleNumber);

// Output: [4, 8, 12, 16, 20]

// High-order Function
// A high-order function is a function that takes another function as an argument, returns a function, or both


// Callback Function
// A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. 


// High-order Function: checkTemperature
// Callback Function: displayTemperatureMessage