var obj1 = {
    address : "Mumbai, India",
    getAddress:function(){
    console.log(this.address);
  }
}

var getAddress = obj1.getAddress;
var obj2 = {name:"akshay"};
// obj2.getAddress();


/*
let understand what's happening in this code
a object declared with one key , one method
later 
getAddress declared  and stored obj1.getAddress 
obj2 = {name:"akshay"}
obj2.getAddress() is trying to access 
which is not found  so it will throw an error
*/

const arr = [1,2,3,4,5];

console.log(arr.slice(3))

const myname = 'arjune'

console.log(
    myname.indexOf('a')

)

console.log(["Banana", "Orange", "Apple", "Mango"].toString())

const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];
console.log(fruits.length)

//delete fruits[0] removes the value at index 0, but does not change the array length.

var obj = {
    name:  "Aman",
    getName:function(){
    console.log(this.name);
  }
}

var getName = obj.getName;
var obj2 = {name:"Akshay", getName };
obj2.getName();
