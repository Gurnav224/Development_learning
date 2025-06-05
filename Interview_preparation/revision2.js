/* # Revision  js interview concept
## topics
    - scope , closure , promise
    - this keyword , pure function and pure compoents 
    - higher order component , 


`scope:` scope is the context in which variables are defined and accessed. 
In JavaScript, 
there are two main types of scope: 
global scope and local scope.
 Global scope refers to variables that are accessible throughout the entire program, 
 
 while local scope refers to variables that are only accessible within a specific function or block of code.

Local scope can be further divided into function scope and block scope. 

Function scope refers to variables that are defined within a function and are only accessible within that function. 

Block scope, introduced in ES6, refers to variables that are defined within a block (e.g., within curly braces) and are only accessible within that block.

`closure:` A closure is a function that has access to its own scope, the outer function's scope, and the global scope. Closures are created when a function is defined inside another function, allowing the inner function to "remember" the variables from the outer function even after the outer function has finished executing.

`promise:` A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 
Promises have three states: pending, fulfilled, and rejected. When a promise is fulfilled, it means the asynchronous operation was successful, and when it is rejected, it means the operation failed.

Promises allow you to handle asynchronous operations in a more manageable way, avoiding callback hell. You can use the `.then()` method to handle the fulfilled state and the `.catch()` method to handle the rejected state.

`this keyword:` The `this` keyword in JavaScript refers to the context in which a function is called. 
It can refer to different objects depending on how the function is invoked. 
In a method, `this` refers to the object that the method is called on. 
In a regular function, `this` refers to the global object (or `undefined` in strict mode). 
In arrow functions, `this` is lexically bound, meaning it retains the value of `this` from its enclosing context.

`pure function:` A pure function is a function that always produces the same output for the same input and has no side effects. This means that a pure function does not modify any external state or variables, and it does not rely on any external state or variables. Pure functions are easier to test, reason about, and debug.

`pure components:` In React, a pure component is a component that only re-renders when its props or state change. Pure components implement a shallow comparison of their props and state to determine if they need to re-render. This can improve performance by preventing unnecessary re-renders.

`higher order function:` A higher-order function is a function that takes one or more functions as arguments or returns a function as its result. Higher-order functions are a key feature of functional programming and allow for more abstract and reusable code. Examples of higher-order functions include `map`, `filter`, and `reduce`.

`higher order component:` A higher-order component (HOC) is a pattern in React where a function takes a component and returns a new component. HOCs are used to share common functionality between components without repeating code. They can be used for tasks like data fetching, state management, or adding additional props to a component.



*/


// Example of scope

let myVar = "I am global"; // Global scope

function myFunction() {
    let myVar = "I am local"; // Local scope
    console.log(myVar); // Accesses local variable
}

myFunction(); // Output: "I am local"

console.log(myVar); // Output: "I am global"

{
    let name = "Block scope variable"; // Block scope
    console.log(name); // Output: "Block scope variable"
}


// Example of Closure

function outerFunction() {
    let outerVar = "I am from outer function"; // Outer variable

    function innerFunction() {
        console.log(outerVar); // Accesses outer variable
    }

    return innerFunction; // Returns inner function
}

let closureFunction = outerFunction();
closureFunction(); // Output: "I am from outer function"

// Example of Promise

let myPromise = new Promise((resolve, reject) => {
    let success = true; // Simulating success or failure

    if (success) {
        resolve("Promise fulfilled!"); // Fulfilled state
    } else {
        reject("Promise rejected!"); // Rejected state
    }
});

myPromise
    .then((result) => {
        console.log(result); // Output: "Promise fulfilled!"
    })
    .catch((error) => {
        console.error(error);
    });



// Example of this keyword

console.log(this) // In the global context, 'this' refers to the global object (window in browsers)

const obj = {    
    name: "My Object",
    showName: function() {
        console.log(this.name); // 'this' refers to obj
    }
};

obj.showName(); // Output: "My Object"

function regularFunction() {
    console.log(this); // 'this' refers to the global object (or undefined in strict mode)
}

const arrowFunction = () => {
    console.log(this); // 'this' is lexically bound, refers to the enclosing context
};


// example of pure function

function add(a, b) {
    return a + b; // Always produces the same output for the same input
}

add(3, 5); // Output: 8

const PureComponent  = React.memo(function MyComponent({ prop1, prop2 }) {
    // This component will only re-render if prop1 or prop2 change
    return (
        <div>
            <p>Prop 1: {prop1}</p>
            <p>Prop 2: {prop2}</p>
        </div>
    );
}); 

// Example of higher-order function
function higherOrderFunction(callback) {
    // Do something
    callback();
}

function myCallback() {
    console.log("Callback function called!");
}

higherOrderFunction(myCallback);

// Example of higher-order component

function withExtraProps(WrappedComponent) {
    return function EnhancedComponent(props) {
        const extraProps = { extraProp: "I am an extra prop" };
        return <WrappedComponent {...props} {...extraProps} />;
    };
}

const MyComponent = (props) => {
    return <div>{props.extraProp}</div>;
};  

const EnhancedComponent = withExtraProps(MyComponent);



// Usage of EnhancedComponent
function App() {
    return (
        <div>
            <EnhancedComponent name="My Enhanced Component" />
        </div>
    );
}