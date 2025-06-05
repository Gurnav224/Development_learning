// this keywords refer to the object that is currently excuting the code. it value depend on the how function is called 


// 1. global scope 
// this refer to the window object in browser or global in nodejs

console.log(this)

//2. inside function it refer the global scope or in strict mode it refer to undefined

function hello(){
    console.log(this)
}

hello()

//3. in object

const obj = {
  name: "Gurnav",
  greet: function() {
    console.log(this.name);
  }
};
obj.greet(); // "Gurnav"


//4. arrow function 

const obj2 = {
  name: "Gurnav",
  greet: () => {
    console.log(this.name);
  }
};
obj2.greet(); // undefined (inherits from global, not `obj`)


//5. constructor function

function Person(name) {
  this.name = name;
}
const p = new Person("Gurnav");
console.log(p.name); // "Gurnav"