
const students = [
    {name:'Alice',age:25},
    {name:'Bob',age:27},
    {name:'Charlie',age:25}
]


// get a new array with names of students;

const getStudentName = students.map((student)=>student.name);

console.log(getStudentName);

// adding grade property to student array 
const addGrade = students.map((student)=>({...student,grade:'A'}));

console.log(addGrade)

const peoples = [
    {
        name:'Alice',
        weight:60,
        height:1.65
    },
    {
        name:'Bob',
        weight:70,
        height:1.75
    },
    {
        name:'Charlie',
        weight:68,
        height:1.8
    }
]


// calculating BMI and adding each object ;

const personalBmi = peoples.map((person)=>({...person,bmi:(person.weight/person.height**2).toFixed(2)}));

console.log(personalBmi)


// map function on an object only

// Object.values(Obj) Give an array of value of object
// Object.keys(Obj) Give an array of keys of object


const person = {
    name:"John",
    age:"30",
    city:"New York"
}

const personToUpperCase = Object.values(person).map((value)=>value.toUpperCase())

console.log(personToUpperCase)

console.log(Object.keys(person))