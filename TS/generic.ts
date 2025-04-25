
// explain genric definition
// generics are a way to create reusable components that can work with any data type. They allow you to define a function, class, or interface that can operate on different types without losing type safety. By using generics, you can write more flexible and maintainable code, as you can create functions and classes that can handle various data types without needing to create separate implementations for each type.

function identity<T>(arg: T): T {
    return arg;
}
let output = identity<string>("myString"); // output is of type 'string'
let output2 = identity<number>(100); // output2 is of type 'number'

console.log(output);
console.log(output2);

function findItem<T>(items:T[], value:T):number {
    return items.indexOf(value);
}
let index = findItem<string>(['apple', 'banana', 'cherry'], 'banana'); // index is of type 'number'
let index2 = findItem<number>([1, 2, 3], 2); // index2 is of type 'number'
let index4 = findItem<{ name: string, age: number }>([{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }], { name: 'Bob', age: 25 }); // index4 is of type 'number'

console.log(index);
console.log(index2)
console.log(index4)

