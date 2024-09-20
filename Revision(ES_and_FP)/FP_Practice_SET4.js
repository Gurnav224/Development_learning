// FP_Practice_SET4,

console.log('\nProgram 1')

const strings = ["apple", "banana", "cherry", "date", "blueberry"];
const totalLength = (strings) => strings.reduce((str,word) => str + word,'').length

console.log(totalLength(strings));

console.log('\nProgram 2')

const numbers = [1, 2, 3, 4, 5];

const sumSquares = (numbers) => numbers.reduce((sum, num) => sum + num * num,0)

console.log(sumSquares(numbers));


console.log('\nProgram 3')

const items = [
    { name: "Item 1", price: 10 },
    { name: "Item 2", price: 20 },
    { name: "Item 3", price: 30 }
  ];

  const totalValue = (items) => items.reduce((total, item) => total + item.price ,0)
  
  console.log(totalValue(items)); 
  


  console.log('\nProgram 4')
const concatStrings = (strings) => strings.reduce((str, word) => str + word ,'')

console.log(concatStrings(['this', 'is', 'fun'])); 


console.log('\nProgram 5')
const numbers2 = [1, 2, 3, 4, 5];

const product = (numbers) => numbers.reduce((prod, num) => prod *num,1)

console.log(product(numbers2));

console.log('\nProgram 6')
const strings2 = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];

const longestString = (strings) => strings.reduce((longest, word) => longest.length > word.length ? longest : word)

console.log(longestString(strings2)); 


console.log('\nProgram 7');

const people = [
    {name: 'Jeena', age: 25}, 
    {name: 'Priya', age: 30}, 
    {name: 'Naina', age: 45}
]

const oldestPersonName = (people) => people.reduce((oldest,person) => oldest > person.age ? oldest.name : person.name)

console.log(oldestPersonName(people)); 

console.log('\nProgram 8');
const people2 = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 40 }
  ];
  // Your code here

  const getAverageAge = (people) => ({getAverageAge:people.reduce((totalAge, person) =>  totalAge + person.age , 0) / people2.length});


  
  console.log(getAverageAge(people2));

  
  console.log('\nProgram 9');
  const products = [
    { name: "Bread", price: 10, quantity: 2 },
    { name: "Clips", price: 20, quantity: 5 },
    { name: "Knife", price: 30, quantity: 1 },
    { name: "Slipper", price: 40, quantity: 3 }
  ];
  // Your code here

  const findMostExpensiveProduct = (products) => products.reduce((maxPrice, product) => maxPrice > product.price ? maxPrice : product)
  
  console.log(findMostExpensiveProduct(products)); 


  console.log('\nProgram 10');

  const fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'apple', 'banana'];
// Your code here

const countStrings = (fruits) => fruits.reduce((fruitCount,key)=> {
  fruitCount[key] = fruitCount[key] + 1 ||  1
  return fruitCount
}
 

, {})

console.log(countStrings(fruits));