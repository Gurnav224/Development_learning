

// ES6_Practice_SET2

console.log('\nProgram 1');

const person  = {
    name:"Rahav",
    age:30
}

person.age = 35;

console.log(person.age)


console.log('\nProgram 2');

const isSportsCar = (car) => car.horsepower >= 300;

const car1 = { make: 'Porsche', model: '911', horsepower: 450 };
const car2 = { make: 'Toyota', model: 'Camry', horsepower: 200 };
console.log(isSportsCar(car1)); // true
console.log(isSportsCar(car2)); // false

console.log('\nProgram 3')
const isEligible = (person , num) => person.age + num > 21;

const person1 = { name: 'Ajay', age: 20 };
console.log(isEligible(person1, 1));
console.log(isEligible(person1, 2));



console.log('\nProgram 4')

const getViews = (blog) => blog.views >= 1000;


const blog1 = {title: 'How to Learn JavaScript', author: 'John Doe', views: 1430};
const blog2 = {title: '10 Reasons to Start a Blog', author: 'Jane Smith', views: 500};
console.log(getViews(blog1)); 
console.log(getViews(blog2)); 


console.log('\nProgram 5');

let a = 1;
let b = 2;



[a, b] = [b,a];

console.log(a)
console.log(b)


console.log('\nProgram 6');

const add = (a= 30 , b = 0) => a+ b;
console.log(add(2,3))

console.log('\nProgram 7');

const combineObjects = (obj1, obj2) => ({...obj1, ...obj2})

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const combinedObj = combineObjects(obj1, obj2);
console.log(combinedObj);


console.log('\nProgram 8');

const getData = (person) => {
    const {name, address:{city, state}} = person

    console.log('name',name)
    console.log('city',city)
    console.log('state',state)
}

const person2 = {
    name: 'John Doe',
    address: {
      city: 'New York',
      state: 'NY',
    },
  };
  getData(person2);

  console.log('\nProgram 9');

  const stringToUpperCase  = (stri) => stri.toUpperCase();
  console.log(stringToUpperCase("hello"))


  console.log('\nProgram 10');

  const concatenateStrings = (str1, str2) => str1 + str2;

  console.log(concatenateStrings("hello","world"))

  console.log('\nProgram 11');

  const lastElement = (arr) => arr[arr.length-1];
  console.log(lastElement([1, 2, 3, 4, 5]))

  console.log('\nProgram 12');

  const firstElement = (arr) => arr[0];

  console.log(firstElement([1,2,3,4,5]))

  console.log('\nProgram 13')

  const sumOfFirstElement = (arr,num) => arr[0] + num;
  console.log(sumOfFirstElement([1, 2, 3],5))


  console.log('\nProgram 14');

  const sumOfFirstAndLast = (arr) => arr[0] + arr[arr.length-1];

  console.log(sumOfFirstAndLast([1,2,3,4,8]))

  console.log('\nProgram 15');

  const personInfo = (person) =>{
    const {name , age } = person;
    return `${name} is ${age} years Old.`
  }

  const persons1 = { name: 'John', age: 25, occupation: 'Software Engineer' }
const persons2 = { name: 'Jane', age: 45, occupation: 'Data Analyst' }
console.log(personInfo(persons1)) 
console.log(personInfo(persons2)) 