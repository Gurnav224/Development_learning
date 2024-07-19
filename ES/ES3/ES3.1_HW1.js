
// question1 

const areaOfRectangle = (a=5,b=3)=>a*b;
console.log(areaOfRectangle())
console.log(areaOfRectangle(4))

// question 2

const concatenatesStrings = (str1,str2="Neog")=>str1+str2;

console.log(concatenatesStrings("Hello ","World"))
console.log(concatenatesStrings('Hello '))

// question 3

const cylinderVolume = (radius=2,height=4)=>Math.PI*radius*radius*height;

console.log(cylinderVolume(3))
console.log(cylinderVolume(3,5))

// question 4

const shopingCartTotal = (price=0,quantity=1)=> price*quantity;

console.log(shopingCartTotal(10))
console.log(shopingCartTotal(15,3))
console.log(shopingCartTotal())


// question 5;

const generateUserProfile = (username="Guest",Age=25,country="Unknown")=>`username: ${username} , Age: ${Age} , Country: ${country}`

console.log(generateUserProfile())

console.log(generateUserProfile("Alice", 30, "USA")); 


// question 6


const sum = (a,b=5)=>a+b;
console.log(sum(2,4));
console.log(sum(3))

// question 7

const calculatePower = (base , exponent=1)=>base**exponent;
console.log(calculatePower(2,3))
console.log(calculatePower(5))


// question 8

const triangleArea = (base,height=4)=>1/2*base*height;

console.log(triangleArea(5))
console.log(triangleArea(3,6))

// question 9;

const concatenateTwoStrings = (str1="Hi ",str2="")=>str1+str2;

console.log(concatenateTwoStrings('Good'))
console.log(concatenateTwoStrings('Hello ',' Abhi'))

