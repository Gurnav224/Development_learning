
# What is javscript  and it's working 

JavaScript is a single-threaded, dynamically typed, interpreted programming language that supports multiple paradigms including object-oriented, functional, and imperative styles. It features prototype-based object orientation and an event-driven architecture.

- (paradigms) : A programming paradigm is a fundamental approach or style of programming that provides a set of principles, concepts, and techniques for designing and implementing computer programs
- (imperative): Imperative programming is a computer science paradigm that instructs a computer to perform a task by explicitly stating the steps it should take. It's the oldest and most traditional programming paradigm. 

**This is the nerdy definition of JavaScript. But what does each term mean? Let's find out**.

**Single-threaded**
JavaScript is a Single-threaded language meaning it only has one main thread of execution. It also means that it has a single call stack. When a function call is made, it's added to the top of the call stack. Once it's done executing, it's popped off the stack and the control moves to the next function in the call stack. Executing tasks sequentially is fundamental to JavaScript's nature but it does provide APIs to execute asynchronous operations(fetch and setTimeout are some examples).

**Dynamically Typed**
In JavaScript, variables are not explicitly declared with types. Types are associated with values and not variables as they are inferred at runtime. Types can also change during the lifecycle of a program. This feature makes JS flexible but it can be susceptible to type-related errors. Tools like TypeScript help in adding static types during development but it is eventually compiled to JS.

**Interpreted Programming Language**
Unlike compiled languages such as Java, JavaScript is not compiled into machine code before execution. Instead the code is read, interpreted, and executed line by line at runtime. However, to improve performance, modern JavaScript engines use Just-In-Time(JIT) compilation which compiles chunks of code on-the-fly. This approach improves execution speed.

**Object-oriented**
This programming paradigm organizes code into Objects, which are instances of classes or prototypes. The class keyword was introduced in ES6 for syntactic sugar. Under the hood, classes in JavaScript still use prototypes. This implementation of OOP is unique to JavaScript.


**Functional**
It is a programming paradigm which promotes writing declarative code by emphasizing the use of functions. Some of the key concepts are:

Pure functions: Functions that always produce the same output for given inputs and have no side effects.
Higher-order functions: Functions that can take other functions as arguments or return them as results.
Immutability: Treating data as immutable, though JavaScript doesn't enforce this by default.
First-class functions: Functions are treated as first-class citizens, meaning they can be assigned to variables, passed as arguments, or returned from other functions.
Function composition: Building complex functionality by combining simpler functions.
JavaScript supports these functional programming concepts alongside its other paradigms, allowing developers to use functional techniques where appropriate.


**Imperative**
Imperative programming is a paradigm where the code explicitly describes the sequence of steps that the program must take to reach the desired state. JavaScript fully supports all necessary constructs like variables, loops, conditionals, and operators which are required for writing imperative code. This approach allows for precise control over the program's execution flow. It is often used for implementing algorithms and managing complex state changes.


**Prototype-based Orientation**
JavaScript uses a prototype-based object model, which is a form of object-oriented programming where objects are the primary entities. Unlike class-based languages, JavaScript uses prototypes to implement inheritance and share properties and methods between objects.

Key aspects of prototype-based orientation in JavaScript 

1. Object creation: Objects can be created directly without defining a class first.
2. Prototype chain: Each object has a link to another object called its prototype. If a property or method isn't found on an object, JavaScript looks for it in the prototype, then the prototype's prototype, and so on.
3. Inheritance: Objects can inherit properties and methods from other objects through their prototype chain.

This prototype-based system allows for powerful and flexible object-oriented programming.



**Event-driven Architecture**
JavaScript's event-based architecture is a programming approach where the flow of the program is determined by events such as user actions, sensor outputs, or messages from other programs. This is fundamental to how JavaScript interacts with web browsers and handles asynchronous operations.

Key aspects of JavaScript's event-based architecture include:

1. Event listeners: Functions that "listen" for specific events and execute when those events occur.
2. Event loop: A continuous process that checks for and dispatches events to their listeners.
3. Asynchronous programming: Allows code to run without blocking the main thread, crucial for responsive web applications.


This architecture enables JavaScript to handle user interactions, API calls, timers, and other asynchronous operations efficiently, making it well-suited for creating interactive web applications.

All these concepts combined make JavaScript a versatile language which can be used on a variety of platforms like Web, Mobile, Server, and AR.

Notes
For your interview, remember this definition:

JavaScript is a single-threaded, dynamically typed and interpreted-compiled language. It is a cross-platform language but mainly used on web for adding interactivity to pages.