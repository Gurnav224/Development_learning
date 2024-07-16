
console.log("Program 1:");

const isBirthDay =  true;

let age = 22;

if(isBirthDay){
    age++;
}

console.log(`current Age: ${age}`)

console.log('---------------------------------');

console.log('Program 2')

let ticketPrice = 100;

let discountedPrice = ticketPrice - ticketPrice*0.15

let passengerAge = 35

// passengerAge = 66;


if(passengerAge>60){
    console.log(`Ticket Price for age greater than 60: ${discountedPrice}`)
}
else{
    console.log(`Ticket Price for age less than or equal to 60: ${ticketPrice}`)
}
console.log('---------------------------------');



console.log('Program 3');

let num1 = 100;

let num2 = 150;

let num3 = 20;

if(num1>num2 && num1>num3){
    console.log(`the third number ${num3} is not largest`)
}
else if(num2>num1 && num2 > num3){
    console.log(`the third number ${num3} is not largest`)
}
else{
    console.log(`the third number ${num3} is largest`)
}

console.log('---------------------------------');


console.log('Program 4:');

const saree = 'Saree';
const kurta = 'Kurta';
const jeans = 'Jeans';
const shoes = 'Shoes';

let sareePrice = 500;
let kurtaPrice = 300;
let jeansPrice = 900;
let shoePrice = 400;

let totalPrice = sareePrice+kurtaPrice+jeansPrice+shoePrice;

let deliveryCharge;

console.log('shopping Cart');

console.log('---------------------------------');

console.log(`Item: ${saree}, Price: ${sareePrice}`)
console.log(`Item: ${kurta}, Price: ${kurtaPrice}`)
console.log(`Item: ${jeans}, Price: ${jeansPrice}`)
console.log(`Item: ${shoes}, Price: ${shoePrice}`)

console.log('---------------------------------');
if(totalPrice<1999){

    deliveryCharge = 99
    totalPrice = totalPrice+deliveryCharge

}
else{
    deliveryCharge = `No Delivery Charges`

}
console.log(`Delivery Charges: ${deliveryCharge}`)
console.log('---------------------------------');

console.log(`Total Cart Price: ${totalPrice}`)


console.log('---------------------------------');

console.log("Program 5");

const number = 8;

if(number > 0){
    console.log(`Number: ${number} is positive`)
}
else if(number < 0){
    console.log(`Number: ${number} is negative`)
}
else{
    console.log(`Number: ${number} is zero`)
}



console.log('---------------------------------');

console.log("Program 6");

const marks1 = 85;
const marks2 = 90;
const marks3 = 78;

const student1 = 'Rahul';
const student2 = 'Priya';
const student3 = 'Tina';



if(marks1>marks2 && marks1> marks3){
    console.log(` ${student1}, scored the highest marks`)
}
else if(marks2>marks1 && marks2> marks3){
    console.log(`${student2}, scored the highest marks`)
}
else{
    console.log(`${student3}, scored the highest marks`)
}
