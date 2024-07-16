

console.log('question 1')

const car = {
    brand:'Mahindra',
    model:'Thar'
}

console.log(`1.1: ${car.brand}`);
console.log(`1.2: ${car.model}`)

car.brand = 'Honda';

console.log(`1.3: ${car.brand}`)

console.log(`1.4:`,car)

car.year = 2022;
car.color = 'Blue';

console.log(`1.6: properties of the 'car' object.`)

for(let key in car){
    console.log(`${key}: ${car[key]}`)
}


console.log('question 2')

const citizen = {
    name:'Ramesh Kumar',
    age:68,
    occupation:'retired'
}


console.log(`2.1: updated age ${citizen.age}`)

citizen.age = citizen.age + 2;

console.log(`2.2: updated age after adding 2:${citizen.age}`);

citizen.city = "Delhi";

console.log(`2.3: properties of the 'citizen'`)

for(let key in  citizen){
    console.log(`${key}: ${citizen[key]}`)
}

console.log(`Question 3`);

const person = {
    name:"rajkumar",
    age:66
}

person.bp = 'Normal'

console.log('3.1: updated Object',person);

if(person.age > 60 && person.bp==='Normal'){
    console.log('3.2: fit to travel')
}
else{
    console.log('3.2: not fit to travel')
}