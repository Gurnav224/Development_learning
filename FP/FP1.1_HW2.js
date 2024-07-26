
console.log('\nProgram1')
const words = ["apple", "banana", "kiwi", "orange", "grape"];
const extractThreeLetter = words.map((word)=>word.slice(0,3));
console.log(extractThreeLetter)
// Output: ['app', 'ban', 'kiw', 'ora', 'gra']
console.log('\nProgram2')
const nums = [1, 2, 3, 4, 5];
const cube = nums.map((num)=>num*num*num);
console.log(cube)
// Output: [1, 8, 27, 64, 125]


console.log('\nProgram3')
const fruitsArray = ["apple", "banana", "kiwi", "orange", "grape"];
const removeFirstTwo = fruitsArray.map((fruit)=>fruit.slice(2));
console.log(removeFirstTwo)
// Output: [ 'ple', 'nana', 'wi', 'ange', 'ape' ]


console.log('\nProgram4')
const salaries = [5000, 7500, 12000, 3000, 9000];

const addBonus = salaries.map((salary)=>salary+salary*0.1);
console.log(addBonus)

// Output: [ 5500, 8250, 13200, 3300, 9900 ]


console.log('\nProgram5')
const names = ["Alice", "Bob", "Charlie", "David", "Eva"];

const addGreet = names.map((name)=>"Hello "+name);

console.log(addGreet)

// Output: [ 'Hello, Alice', 'Hello, Bob', 'Hello, Charlie', 'Hello, David', 'Hello, Eva' ]
console.log('\nProgram6')
const sentences = ["Hello, how are you?", "JavaScript is fun!", "Arrays are versatile."];
const stringLength = sentences.map((string)=>string.length);
console.log(stringLength)
// Output: [ 19, 18, 21 ]
console.log('\nProgram7')
const temperaturesCelsius = [0, 20, 37, -5, 10];

const temperaturesFahrenheit = temperaturesCelsius.map((celsius)=>Number((celsius*1.8+32).toFixed(2)))
console.log(temperaturesFahrenheit)
// Output: [ 32, 68, 98.6, 23, 50 ]
console.log('\nProgram8')
const prices = [50, 75, 120, 30, 90];

const discountedPrice = prices.map((price)=>price-price*0.1);
console.log(discountedPrice)

// Output: [ 45, 67.5, 108, 27, 81 ]


console.log('\nProgram9')
const decimalNumbers = [50.245600, 750.56770, 12.567050, 300.5065, 9.23406789];
const toFixedNumber = decimalNumbers.map((number)=>number.toFixed(2));
console.log(toFixedNumber)
// Output: [ '50.25', '750.57', '12.57', '300.51', '9.23' ]

console.log('\nProgram10')

const namesArray = ["Alice", "Bob", "Charlie", "David", "Eva"];

const addNameLength = namesArray.map((name)=>name+name.length);

console.log(addNameLength)

// Output:[ 'Alice5', 'Bob3', 'Charlie7', 'David5', 'Eva3' ]