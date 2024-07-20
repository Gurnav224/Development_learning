

// 1. Write an arrow function that takes an object containing temperature details and prints them.

console.log(`\nquestion 1`)
const printTemperature = ({location:Location,temperature:Temperature})=>{
return `Location: ${Location} , Temperature: ${Temperature}`
}

console.log(printTemperature({ location: "New York", temperature: 15 }));
// Output: Location: New York, Temperature: 15 degree celsius

console.log(printTemperature({ location: "London", temperature: 10 }));
// Output: Location: London, Temperature: 10 degree celsius



// 2. Write an arrow function that takes an object containing fruit details and prints them.
console.log(`\nquestion 2`)
const printFruit = ({fruitName:name,fruitColor:color,inStock:available})=>{
return `Fruit Name: ${name} , Fruit Color: ${color} , Available: ${available}`
}

console.log(printFruit({ fruitName: "Apple", fruitColor: "Red", inStock: true }));
// Output: Fruit Name: Apple, Fruit Color: Red, Available: true

console.log(printFruit({ fruitName: "Grapes", fruitColor: "Green", inStock: false }));
// Output: Fruit Name: Grapes, Fruit Color: Green, Available: false

// 3. Write an arrow function that takes an array containing a student's name and their scores, and prints them.
console.log(`\nquestion 3`)
const printStudentScores = (name,...rest)=>{
    return `student ${name} , marks: ${rest.join(" ")}`
}

console.log(printStudentScores(["Alice", 90, 85, 95]));
// Output: Student: Alice, Scores: 90, 85, 95

console.log(printStudentScores(["Bob", 80, 75, 85]));
// Output: Student: Bob, Scores: 80, 75, 85


// 4. Write an arrow function that takes an object containing details of a product and prints them by renaming the keys.

console.log(`\nquestion 4`)
const printProductDetails = ({name:Product,price:Price})=>{
    return `Product: ${Product}, Price: ${Price}`
}


console.log(printProductDetails({ name: "Laptop", price: 899 }));
// Output: Product: Laptop, Price: $899

console.log(printProductDetails({ name: "Phone", price: 599 }));
// Output: Product: Phone, Price: $599



// 5. Write an arrow function that takes an object containing a person's details with default parameters and prints them. Rename name and age.

const printPersonDetails = ({name:Name="Anonymous",age:Age="Unknown"})=>{
    return `Name: ${Name} , Age: ${Age}`
}
console.log(`\nquestion 4`)
console.log(printPersonDetails({ name: "John", age: 30 }));
// Output: Name: John, Age: 30

console.log(printPersonDetails({}));
// Output: Name: Anonymous, Age: Unknown




// 6. Write an arrow function that takes an array containing a city and its population details and prints them. Rename city,  population and country.


const printCityPopulation = ([city,{population,country}] )=>{

    return `City: ${city}, population: ${population}, country: ${country}`

}

console.log(`\nquestion 6`)
console.log(printCityPopulation(["New York", { population: 8623000, country: "USA" }]));
// Output: City: New York, Population: 8623000, Country: USA

console.log(printCityPopulation(["Tokyo", { population: 37833000, country: "Japan" }]));
// Output: City: Tokyo, Population: 37833000, Country: Japan


// 7. Write an arrow function that takes an array containing a car and its details and prints them. Rename car name and model.


const printCarDetails = ([carName,{model,price}])=>{
    return `Name: ${carName} , Model: ${model} , Price: ${price}`
}

console.log(`\nquestion 7`)

console.log(printCarDetails(["All-Terrain SUV", { model: "SUV", price: 4500000 }]));
// Output: Name: All-Terrain SUV, Model: SUV, Price: Rs. 4500000

console.log(printCarDetails(["GreenDrive Electric", { model: "Electric", price: 500000 }]));
// Output: Name: GreenDrive Electric, Model: Electric, Price: Rs. 500000

