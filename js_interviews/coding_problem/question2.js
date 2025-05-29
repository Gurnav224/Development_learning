// 1️⃣ Filter students with marks above 50
// Write a function that takes an object of students (with their marks in an array) and returns a new object containing only those students whose average marks are above 50.


function modifyStudent(students) {
    let filterStudents = {};

    for (let student of students) {
        filterStudents[ student.name ] = student.marks
    }

    let aboveAverage = {};

    for (let key in filterStudents) {
        if (filterStudents[ key ].reduce((total, curr) => total + curr, 0) / filterStudents[ key ].length > 50) {
            aboveAverage[ key ] = filterStudents[ key ]
        }
    }

    return aboveAverage
}


const students = [
    { name: 'Alice', marks: [ 40, 50, 60 ] }, { name: 'Bob', marks: [ 70, 60, 80 ] }, { name: 'Charlie', marks: [ 30, 40, 20 ] }
];


// console.log(modifyStudent(students))

// Expected: { Bob: [70, 60, 80] }


// 2️⃣ Filter products based on price and category
// Write a function that accepts an object of products (with their price and category) and returns a new object containing only products priced above $100 and belonging to the category electronics.
// Example:



function filterProducts(products){
    let fProduct = {};

    for(let product in products){
        if(products[product].price > 100 && products[product].category === 'electronics'){
            fProduct[product] = products[product]
        }
    }

    return fProduct
}



const products = {  
  laptop: { price: 900, category: 'electronics' },  
  mouse: { price: 20, category: 'electronics' },  
  chair: { price: 150, category: 'furniture' },  
  phone: { price: 300, category: 'electronics' }  
};  
// Expected: { laptop: {...}, phone: {...} }


console.log(filterProducts(products))