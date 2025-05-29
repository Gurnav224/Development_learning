// 1️⃣ Filter students with marks above 50
// Write a function that takes an array object of students (with their marks) and returns a new object containing only those students whose marks are above 50.
// Example:




function filterStudent(students){
    let result = {};

    for(let student in students){
        if(students[student] > 50){
            result[student] = students[student]
        }
    }

    return result
}


const students = { Alice: 45, Bob: 60, Charlie: 75 };  
// Expected: { Bob: 60, Charlie: 75 }

// console.log(filterStudent(students))


// 2️⃣ Filter products based on price
// Write a function that accepts an object of products (with their prices) and returns a new object containing only products priced above $100.



function modifyProduct(products){
    let filterProduct = {};

    for(let product in products){
        if(products[product] > 100){
            filterProduct[product] = products[product]
        }
    }


    return filterProduct

}

const products = { laptop: 900, mouse: 20, keyboard: 40, phone: 300 };  
// Expected: { laptop: 900, phone: 300 }

// console.log(modifyProduct(products))



// 3️⃣ Get employees with salary above threshold
// Write a function that takes an object of employees with their salaries and returns a new object containing only those employees who earn more than $5,000.
// Example:


function modifySalary(employees){
    let filterSalary = {};
    for(let employee in employees){
        if(employees[employee] > 5000){
            filterSalary[employee] = employees[employee]
        }
    }

    return filterSalary
}



const employees = { John: 4000, Jane: 6000, Bob: 7000 };  
// Expected: { Jane: 6000, Bob: 7000 }

// console.log(modifySalary(employees))



// 4️⃣ Filter tasks by completion status
// Write a function that takes an object of tasks (with their completed status) and returns a new object containing only the tasks marked as true for completion.
// Example:


const tasks = { task1: true, task2: false, task3: true };  
// Expected: { task1: true, task3: true }


function modifyTask(tasks){
    let fitlerTask = {};

    for(let task in tasks){
        if(tasks[task] === true){
            fitlerTask[task] = tasks[task]
        }
    }
    return fitlerTask
}


// console.log(modifyTask(tasks))


// 5️⃣ Get items with quantity above 10
// Write a function that takes an object representing item quantities and returns only those items with a quantity above 10.
// Example:


const stock = { apples: 5, oranges: 15, bananas: 12 };  
// Expected: { oranges: 15, bananas: 12 }



function modifyStock(stocks){
 let filterStock = {};
 for(let stock in stocks){
    if(stocks[stock] > 10){
        filterStock[stock] = stocks[stock]
    }
 }
 return filterStock
}

// console.log(modifyStock(stock))


// 6️⃣ Filter books with more than 300 pages
// Write a function that takes an object of books (with their page counts) and returns a new object with only the books that have more than 300 pages.
// Example:


const books = { book1: 250, book2: 350, book3: 500 };  
// Expected: { book2: 350, book3: 500 }


function modifyBookObj(books){
 let filterBook = {};

 for(let book in books){
    if(books[book]  > 300){
        filterBook[book] = books[book]
    }
 }

 return filterBook
}



// console.log(modifyBookObj(books))



// Write a function that takes an object of cars (with their mileage) and returns a new object containing only those cars with mileage below 100,000 km.
// Example:


const cars = { car1: 80000, car2: 120000, car3: 95000 };  
// Expected: { car1: 80000, car3: 95000 }


function modifyCar(cars){
    let resultCar = {};

    for(let car in cars){
        if(cars[car] < 100000){
            resultCar[car] = cars[car]
        }
    }

    return resultCar
}


console.log(modifyCar(cars))