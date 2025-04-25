


interface Person {
    name:string,
    age:number
}


const person:Person = {
    name:'alice',
    age:33
}

interface Car {
    make:string,
    model:string,
    year:number,
    isElectric:boolean,
    features:string[]
}


const myCar:Car = {
    make:"Tesla",
    model:"Model 3",
    year:2024,
    isElectric:false,
    features:['feat1']
}


interface MathFunction{
    (a:number , b:number):number;
}


const add:MathFunction = (a,b) => a+ b;
console.log(add(3,5));


interface Double{
    (a:number):number
}



const double:Double = (a) => a * a;

console.log(double(3));
