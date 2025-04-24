
let id2:string|number;

id = 1;
id = "john";

let numberOrStringArray2:(number | string)[] = [1,"one", 2, "two"];

let mixedArray:(number | string | boolean)[] = [1, "one", false,];

type TypeA = {prodA:number}
type TypeB = {prodB:string}


const objectA:TypeA = {prodA:23}
const objB:TypeB = {prodB:"Alice"};



type TypeC = TypeA & {
    propD:string
}

type Person = {
    name:string,
    age:number
}

type Student = Person & {
    studentId:string
}

type Teacher = Person & {
    subject:string
}

let num  = 10;