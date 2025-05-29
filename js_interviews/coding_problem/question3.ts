// 3️⃣ Get employees with salary above threshold and age below 40
// Write a function that takes an object of employees (with their salary and age) and returns a new object containing only those employees who earn more than $5,000 and are younger than 40.
// Example:

interface Employees {
    [name:string]:{salary:number, age:number}
}

function getEmployee(employees:Employees){
    let filterEmployee = {};

    for(let employee in employees){
        if(employees[employee].salary > 5000 && employees[employee].age < 40){
            filterEmployee[employee] = employees[employee]
        }
    }

    return filterEmployee

}


const employees:Employees = {  
  John: { salary: 4000, age: 35 },  
  Jane: { salary: 6000, age: 32 },  
  Bob: { salary: 7000, age: 45 }  
};  


// console.log(getEmployee(employees))

// Expected: { Jane: {...} }

// 4️⃣ Filter tasks by completion status and priority
// Write a function that takes an object of tasks (with completed status and priority as 'high', 'medium', or 'low') and returns only tasks marked as completed: true and priority: 'high'.
// Example:

interface Task {
    [task :string]:{completed:boolean , priority:'high' | 'low' | 'medium'}
}

function modifyTasks(tasks:Task){
    let filtertask = {};

    for(let key in tasks) {
        if(tasks[key].completed && tasks[key].priority === 'high'){
            filtertask[key] = tasks[key]
        }
    }

    return filtertask
}



const tasks:Task = {  
  task1: { completed: true, priority: 'low' },  
  task2: { completed: false, priority: 'high' },  
  task3: { completed: true, priority: 'high' }  
};  
// Expected: { task3: {...} }

// console.log(modifyTasks(tasks))



// 5️⃣ Get items with quantity above 10 and not expired
// Write a function that takes an object of items (with quantity and expired status) and returns only items that have a quantity above 10 and are not expired.
// Example:

interface Stock {
    [fruit :string] :{quantity:number, expired:boolean}
}

function modifyStock(stocks:Stock){
    let filterStock = {};

    for(let key in stocks){
        if(stocks[key].quantity > 0 && ! stocks[key].expired){
            filterStock[key] = stocks[key] 
        }
    }

    return filterStock
}

const stock = {  
  apples: { quantity: 5, expired: false },  
  oranges: { quantity: 15, expired: false },  
  bananas: { quantity: 12, expired: true }  
};  

// console.log(modifyStock(stock))
// Expected: { oranges: {...} }

// 6️⃣ Filter books with more than 300 pages and published after 2010
// Write a function that takes an object of books (with pages and year) and returns only those books with more than 300 pages and published after 2010.
// Example:

interface Books {
    [book:string]:{pages:number,year:number}
}

function getBooks(books:Books){
    let filterBook = {};

    for(let key in books){
        if(books[key].pages > 300 && books[key].year > 2010){
            filterBook[key] = books[key]
        }
    }

    return filterBook
}

const books = {  
  book1: { pages: 250, year: 2012 },  
  book2: { pages: 350, year: 2015 },  
  book3: { pages: 500, year: 2005 }  
};  


// console.log(getBooks(books))

// Expected: { book2: {...} }



// 7️⃣ Filter cars with mileage below 100,000 km and color red
// Write a function that takes an object of cars (with mileage and color) and returns a new object containing only those cars with mileage below 100,000 km and color 'red'.
// Example:

interface Car {
    [car:string] : {mileage:number, color:string}
}

function filterCars(cars:Car){
    let fcar = {};
    for(let key in cars){
        if(cars[key].mileage > 100000 && cars[key].color === 'red'){
            fcar[key] = cars[key]
        }
    }

    return fcar
}


const cars:Car = {  
  car1: { mileage: 80000, color: 'blue' },  
  car2: { mileage: 120000, color: 'red' },  
  car3: { mileage: 95000, color: 'red' }  
};  


console.log(filterCars(cars))
// Expected: { car3: {...} }