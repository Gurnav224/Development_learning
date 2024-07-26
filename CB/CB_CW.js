
// function greetUser(username,callback){
//     let message = "Good morning, "+username;
//     callback(message)
// }


// function logMessage(message){
// console.log(message)
// }




// greetUser('alice',logMessage)

const greetUser = (username,callback)=>{
    let message = "Good morning ,"+ username;
    callback(message)
}


const logMessage = (message)=>{
    console.log(message)
}


greetUser('alice',logMessage)



// you have a btn 

// btn.addEventListener("click",printMessage)

// function printMessage(){ console.log('....')}