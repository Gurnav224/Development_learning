// ES6_Practice_Set1]

console.log("Program 1");
const isEligibleToVote = (age) =>
  age >= 18 ? "Eligible to vote" : "Not eligible to vote";

console.log(isEligibleToVote(20));
console.log(isEligibleToVote(18));
console.log(isEligibleToVote(17));

console.log("\nProgram 2");
const isGreater = (a, b) =>
  a > b ? `${a} is Greater than ${b}` : `${b} is Greater than ${a}`;
console.log(isGreater(2, 5));
console.log(isGreater(10, 5));

console.log("\nProgram 3");
const checkNum = (num) => (num > 0 ? "Positive Number" : "Negative Number");

console.log(checkNum(9));
console.log(checkNum(-8));
console.log(checkNum(22));

console.log("\nProgram 4");

const isEvenOdd = (num) => (num % 2 === 0 ? "Even" : "Odd");

console.log(isEvenOdd(5));
console.log(isEvenOdd(8));
console.log(isEvenOdd(10));

console.log("\nProgram 5");
const checkForAlphabetA = (Str) =>
  Str.includes("a") ? "Includes a" : " Does not include a";

console.log(checkForAlphabetA("Tanay"));
console.log(checkForAlphabetA("Jeep"));
console.log(checkForAlphabetA("Jane"));

console.log("\nProgram 6");
const checkLength = (str) =>
  str.length >= 5 ? " more than 5 characters" : "less than 5 characters ";

console.log(checkLength("Programming"));
console.log(checkLength("Jeep"));

console.log("\nProgram 7");

const isBetweenOneAndTen = (num) => num >= 1 && num <= 10;

console.log(isBetweenOneAndTen(5));
console.log(isBetweenOneAndTen(11));

console.log("\nProgram 8");
const isHelloPresent = (str) => str.toLowerCase().includes("hello");

console.log(isHelloPresent("Hello World"));
console.log(isHelloPresent("World"));

console.log("\nProgram 9");
const isMultipleOfThree = (num) => num%3 ===0;

console.log(isMultipleOfThree(5))
console.log(isMultipleOfThree(9))

console.log('\nProgram 10')

const multiplyByTen = (num) => num * 10;

console.log(multiplyByTen(20))
console.log(multiplyByTen(40))

console.log('\nProgram 11');

const product = {
    title: "iPhone",
    price: 5999,
    description: "The iPhone is a smartphone developed by Apple"
  }

  
  const { title, price, description } = product;
  console.log(title)
  console.log(price)
  console.log(description)

  console.log('\nProgram 12');

  const book = {
    title:'Rich Dad Poor Dad',
    author:"dont't know",
    pages:200
  }

  const getBookDetails = (book) => book.pages > 100;

  console.log(getBookDetails(book))

  console.log('\nProgram 13')

 

  const changeOccupation = (person , newOccupation ) => person.occupation = newOccupation;
  const person = { name: 'Amit', age: 25, occupation: 'Software Engineer' } ;

  console.log(person)
changeOccupation(person,'Product Manager');

console.log(person)


console.log('\nProgram 14');

const numbers  = [1,2,3];
const [a , b, c] = numbers;

console.log(a)
console.log(b)
console.log(c)
console.log('\nProgram 15')
const defaultParamsFunc = (a, b, c = 4) => a * b *c;

console.log(defaultParamsFunc(3,1))
console.log(defaultParamsFunc(3, 10))