// 

const sayGoodBye = (name:string):string => {
 return `Goodbye , ${name}`
}

console.log(sayGoodBye('anurag'))


const multiply = (x:number, y:number):number => {
    return x * y
}

console.log(multiply(3,5))
console.log(multiply(4,5))

const isEven = (num:number) : boolean => {
    return num % 2 ? true : false
}

console.log(isEven(3))
console.log(isEven(4))


const logValue = (value:string | boolean | number):void => {
    console.log(value)
}

logValue(3)
logValue('hello')
logValue(false)


const describePerson  = (person:{name:string, age:number}):string => {
    return `${person.name} is ${person.age} years old`
}


console.log(
    describePerson({name:'abhi',age:33})

)

type User = 'admin' |'user'|'guest';

const getUserRole = (user:User) => {
    if(user === 'admin') return 'Admin access';
    if(user==='user') return 'User Access'
    if(user === 'guest') return 'Guest Access'
}

console.log(getUserRole('admin'))
console.log(getUserRole('guest'))
console.log(getUserRole('user'))

type Employee = {
    name:string,
    department:string
}

type Manager = Employee & {
    level:string
}

const promoteEmployeeToManager = (obj:Manager) => {
    return {
        ...obj,
        post:'manager'
    }
}


console.log(promoteEmployeeToManager({
    name:'abhisfa',
    department:'IT',
    level:'senior'
}))

const  squareNumbers = (num:number):number => {
return num* num
}

console.log(squareNumbers(3))