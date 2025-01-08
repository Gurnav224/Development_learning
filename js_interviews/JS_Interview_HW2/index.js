

// call method

function callMyName(){
  console.log(this.name)
}

let myname = {
    name:"Avi"
}

let anotherName = {
    name:'Arvind'
}

// callMyName.call(myname);
// callMyName.call(anotherName)


// bind method; 


function printAddress(state){
  console.log(this.location, state)
}

let address = {
    location:'123, street , noida,'
}

let copy_address = printAddress.bind(address, "UP")

// copy_address()


// apply method;

 
function printScore(math,science, english){
console.log( "Total Score: " +this.total, "maths: "+math, "english: "+science, "english: "+english)
}


let myscore = {
    total:1599
}

printScore.apply(myscore, [90,67, 87])


// summary 
// call immediately invoke 
// bind didn't invoke immediately and accept argument
// apply invoke immediately and accpet argument as an array of values