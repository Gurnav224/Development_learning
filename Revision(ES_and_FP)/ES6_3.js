// ES6_Practice_SET 3
console.log('\nProgram 1')
const items = ['apple', 'banana', 'orange'];
const formatArray = (items) => `The array has ${items.length} items, and the first item is "${items[0]}", and the last item is "${items[items.length-1]}"`;

const message = formatArray(items);
console.log(message)


console.log('\nProgram 2')

const product = {
    name: 'Socks',
    price: 249,
    inStock: true,
  };

  const formatProduct  = (product) => {
    const {name , price, inStock} = product;
    return `${name} Costs INR ${price}  and is in ${inStock ? "stock":"Out Of Stock"}`
  }
  
  const message1 = formatProduct(product);
  console.log(message1);

  console.log('\nProgram 3');
  const findPerson = (arr,name) => {
    for(let i=0; i<arr.length; i++){
        if(arr[i].name === name) {
            return arr[i]
        }
    }
    return null
  };

  console.log(findPerson([{ name: 'Amay', age: 25 }, { name: 'Akhil', age: 25 }], "Akhil"));

  console.log('\nProgram 4');

  const pickFirstAndSecond  = (fruits) =>{
    const [fruitOne,fruitTwo] = fruits;
    return {
        "first":fruitOne,
        "second":fruitTwo
    }
  }

  console.log(pickFirstAndSecond(["grapes", "banana", "apple"]))


  console.log('\nProgram 5');

  const startsWithA = (str) => str.charAt(0) === 'A';

  console.log(startsWithA('Akshita'))
  console.log(startsWithA('Jeena'))

  console.log('\nProgram 6');

  const printFirstCharacter = (arr) => arr[0]

  console.log(printFirstCharacter([1, 2, 3, 5, 8]))

  console.log('\nProgram 7');

  const printLastFive = (arr) => arr.slice(arr.length -5)

  console.log(printLastFive([0, 1, 1, 2, 3, 5, 8]))


  console.log('\nProgram 8');

  const printSecondCharacter = (arr) => arr[1] *20
 
  console.log(printSecondCharacter([1, 2, 3, 5, 8]))

  console.log('\nProgram 9');
  const sayHello = (arr) => "Hello" + arr[1]

  console.log(sayHello(["Akshay", "Sweta", "Prerana", "Vinay"]))

console.log(sayHello(["Kanika", "Rakesh", "Prerana", "Puja"]))

  console.log('\nProgram 10');
  const sumOfEvenIndices = (arr) => {
    let sum = 0;
    for(let i=0; i < arr.length; i++) {
     if(i%2 === 0) {
        sum = sum + arr[i]
     }
    }
    return sum
  }

  console.log(sumOfEvenIndices([2, 4, 3, 7, 1, 5])) 
console.log(sumOfEvenIndices([12, 14, 3, 27, 15, 25])) 

  console.log('\nProgram 11');
 const sumFirstTwoElements = (arr) => arr[0] + arr[1]
console.log(sumFirstTwoElements([10, 4, 3, 7, 1, 5])) 
console.log(sumFirstTwoElements([12, 14, 3, 27, 15])) 

  console.log('\nProgram 12');
const printMultipleOfFive = (arr) => arr.find((num) => num % 5 === 0)
  console.log(printMultipleOfFive([7, 4, 10, 7, 5, 3])) 
console.log(printMultipleOfFive([7, 5, 10, 7, 15, 3])) 


  console.log('\nProgram 13');
  const userData = {
    name: 'Jane Doy',
    postalCode: '12134',
    city: 'Germany',
  }

  const getAddress = (data) => {
    const {postalCode, city} = data;

    return {postalCode , city}
  }
  
  console.log(getAddress(userData));


  console.log('\nProgram 14');

  const userData1 = {
    name: 'Gaurav',
    postalCode: '12134',
    country: 'Japan',
  }
  
  const userData2 = {
    name: 'Pritam',
    postalCode: '560223',
    country: 'India',
  }

  const printData = (data) => {
    const { name , country} = data
    return `${name} lives in ${country}`
  }

  console.log(printData(userData1)); 

  console.log(printData(userData2)); 


  console.log('\nProgram 15');

  const product1 = {
    name: "Apple MacBook Air 2020",
      specification: {
        capacity: "256GB",
        size: "13.3 Inch"
      },
    price: 82900


  }


  const printProductDetails = (product) => {

    const {name , specification:{capacity, size}} = product;

    return `${name} which is of ${size} Inch, has a capacity of ${capacity}`
  }

  console.log(printProductDetails(product1)); 