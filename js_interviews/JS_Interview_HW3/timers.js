
// setTimeout is javascript function used to excute to a function or piece of code after delay in milliseconds

function printHello(){
    console.log('I am setTimeout')
}


// setTimeout(printHello, 5000)


// setInterval is javascript function that repeatedly excute calls a function
// or exutes a code snippet at fixed time intervals


let counter = 0;



const intervalId = setInterval(function printCounter(){
    counter ++;
    console.log('counter', counter)
    if(counter >= 5){
        clearInterval(intervalId)
    }
}, 1000)

