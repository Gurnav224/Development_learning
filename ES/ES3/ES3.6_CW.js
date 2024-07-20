
let personName = 'Maze';
let age = 30;

// const obj = {
//     personName:personName,
//     age:age
// }

// console.log(obj)

// const obj2 = {
//     personName,
//     age
// }

// console.log(obj2)

const createObj = (name,age)=>({name,age});

console.log(createObj(personName,age))