
const greet = (name:string) :string=> {
    return `Hello , ${name}`
}   


console.log(greet('abhishek'))


const addNumbers = (a:number, b:number):number => {
    return a + b
}

console.log(addNumbers(3,5))

const calculateVolume = (length:number, width:number, height:number):number => {
    return length * width * height
}

console.log(calculateVolume(3,5,6))


const printInfo = (info:string | number):void => {
    console.log(info)
}

printInfo("hello")
printInfo(39)



type Circle = {
    type:'circle',
    radius:number
}

type Rectangle = {
    type:'rectangle',
    length:number,
    width:number
}

type Area = Circle | Rectangle;


const getArea = (shape:Area):number  => {
    if(shape.type === 'circle'){
        return Math.PI *shape.radius * shape.radius
    }
    else{
        return shape.length * shape.width
    }
}


console.log(getArea({
    type:'circle',
    radius:5
}))


console.log(getArea({
    type:'rectangle',
    length:5,
    width:3
}))


type Person = {
    name:string,
    age:number
}

type Student =  Person & {
studentId:string
}

const convertPersonToStudent = (person:Person):Student => {
    return {
        ...person,
        studentId:'s001'
    }
}


console.log(convertPersonToStudent({
    name:'anurag',
    age:33,
}))



const doubleNumbers = (nums:number[]):number[] => {
    return nums.map((nu) => nu * 2)
}

console.log(doubleNumbers([1,2,4,5]))