
console.log('question 1 \n');

const sumAndDifference = (arr)=>{
  const [a,b] = arr;
  let sum = a+b
  let difference = a-b;

  console.log('Sum; ',sum,'Difference',difference)
}

sumAndDifference([5, 3]) // Output: Sum: 8, Difference: 2

sumAndDifference([10, 7]); // Output: Sum: 17, Difference: 3



console.log('\nquestion 2');

const firstAndLast = (str)=>{
    let first = str[0];
    let last = str[str.length-1];

    console.log('First Character: ',first, 'last character: ',last)

}

firstAndLast('hello')
firstAndLast('world')


console.log('\nquestion 3');

const calculateRectangleArea = (obj)=>{
    const {length,width} =obj;

    return `The area of the rectangle is ${length*width}`
}

console.log(calculateRectangleArea({ length: 5, width: 3 })); // Output: The area of the rectangle is: 15

console.log(calculateRectangleArea({ length: 8, width: 4 })); // Output: The area of the rectangle is: 32  

console.log('\nquestion 4');


const getFirstTwoColors = (arr)=>{
    const [first ,second] = arr;
    return `The first two colors are: ${first} and ${second}`
}


console.log(getFirstTwoColors(["red", "blue", "green", "yellow"])); // Output: The first two colors are: red and blue

console.log(getFirstTwoColors(["orange", "purple", "pink"])); // Output: The first two colors are: orange and purple

console.log('\nquestion 5');


const extractNestedInfo = (obj)=>{
    const {data:{name,age,country}} = obj;

    return `${name} is ${age} years old and lives in ${country} `
}

console.log(extractNestedInfo({ data: { name: "John", age: 35, country: "USA" } }));
// Output: John is 35 years old and lives in USA.


console.log(extractNestedInfo({ data: { name: "Emma", age: 28, country: "Canada" } }));
// Output: Emma is 28 years old and lives in Canada.

console.log('\nquestion 6');


const productAndDifference = (arr)=>{
    const [first,second,third] = arr;
    
  

    console.log('Proudct and Difference: ',  first*second-third )
}


productAndDifference([5, 3, 5, 6]); // Output: Product and Difference: 10

productAndDifference([10, 7, 35, 30]); // Output: Product and Difference: 35


console.log('\nquestion 7');

const extractData = (obj)=>{
    const {product:{itemName,description,manufacturingCountry}}= obj

    return `ItemName; ${itemName} , Description: ${description} , Country: ${manufacturingCountry}`
}

console.log(extractData({ id: 1, product: { itemName: "Pencil", description: "Extra Dark Pencil", manufacturingCountry: "USA" } }));
// Output: Item name: Pencil, Description: Extra Dark Pencil, Manufacturing Country: USA

console.log(extractData({ id: 2, product: { itemName: "Sharpener", description: "Faber Castell Premium", manufacturingCountry: "Germany" } }));
// Output: Item name: Sharpener, Description: Faber Castell Premium, Manufacturing Country: Germany