
// question set 1

let id:string|number;
id =3
id = "hello"



let status2:'active'|'inactive'|'pending' = 'inactive';

let input:boolean | null;

let numberOrStringArray :(number | string)[];

// question set 2

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

type Employee = {
    company:string
}

type WorkingStudent =  Student & Employee;

type Address = {
    city:string,
    zipCode:string
}

type fullProfile  = Teacher & Address;

// question set 3

type Vehicle  = {
    make:string,
    year:number
}


type Car = Vehicle  & {
    seats:number
}

type Bike = Vehicle & {
    type:string
}

type Battery = {
    capacity:number
}

type ElectricCar = Car & Battery;

type Registration = {
    regNumber:string,
    ownerName:string
}

type bikeDetails = Bike & Registration;
