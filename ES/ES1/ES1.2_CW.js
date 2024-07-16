
// block scoping this will work for let as well as const 
// so can we able to access a in if block

let a = 2;

if(true){
    console.log(a)
    // yes we access a inside if block
}

console.log(a)


// so if we declare that variable inside the block

if(true){
    let b = 2;
    console.log(b)
}
// uncomment this to see the difference . 
// console.log(b): // it will thrown an error
// ReferenceError: b is not defined 
// so if we defined inside any block that we can access in that same block only

// Let check with const 
const c = 12;
if(true){
console.log(c)
}

console.log(c)

// let see another example

let num = 100;
if(true){
    let num = 40
}

console.log(num);

// so it will give output 100 because it will access num outside the block


let num1  = 199;

// if we defined here, it will be accessible below throwout the code 
function printNum(){
    //  but it will thrown error here because num1 is already there inside the block , so here it will not access num1  outside the function
    // console.log(num1)

    // ReferenceError: cannot access 'num1' before initialization
    let num1 = 40;
    console.log(num1)
    // it will give preference to block level
 
}
console.log(num1);
printNum();

//--------------------------------------

function printNum1(){

    console.log(num); // 100
    let num3 = 60;
    console.log(num3); // 60

    if(true){
        let num3 = 120;
        console.log(num3) // 120
    }
}
console.log(num) // 100
printNum1()

// this will holds true for const as well
//--------------------------------------
// let see one more example


let num4 = 10;
if(true){
    num4 = 20;
    // if we change value to global variable than it will update that value to the global variable 
    console.log(num4)
    // as well as, here also it will print 20
}

// in the case of (let) only we can update any value globaly, if we will take const key than we can't update it will thrown an error

// TypeError: Assignment to constant variable


//----------------*********Important***********------------------------

// in this case it will thrown an error if we declear and initialize at same place 

// uncomment to see the output of the below code .
// console.log(name) // Referenece error : cannot access 'name' before initailization


let name = "John";
//  console.log(name)




//----------*****Notice Carefully*****--------------------

let name1;
// console.log(name1)
// now here it will give (undefined);
// that console.log is able to find that name1 variable is present 
// here but it is not intialized with some value

name1 = "Avinash"

// console.log(name1)

// same thing with const also same error

//--------------------------------
// There is another way we can decalare variable (3 way)
// 1-> let 
// 2-> const 
// 3-> var


var name3 = "Joe";
// this is being used from long time, let and const came later.
console.log(name3);


//------------------ Observe properly difference

// here it will give (undefined). It will not thrown error

// this is not case with let and const 

console.log(name4);
var name4 = "Doe";


/*
In the case of (var) we not get a reference error , we get a undefined output

so here concept is:-> Hosting, 
if we declare variable with (var),
than our variable get hosted, hosted means they are move to the top

let see how our interpreter read this code

var name4;
console.log(name4);
name = "Joe";

this concept know as HOISTING
*/