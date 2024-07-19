


console.log("\n question 1")

const logFirstAndRest = (a,...rest)=>{
    console.log("first",a);
    console.log("rest",rest)
}

logFirstAndRest(1,2,3,4,5)

console.log("\n question 2")

const logFirstAndSecond = (a,b,...rest)=>{
    console.log("first",a)
    console.log("second",b)
    console.log("rest",rest)
}

logFirstAndSecond(12, 22, 33, 44, 55)

console.log("\n question 3")


const calculateProduct = (...rest)=>{
    let product = 1;
    for(let i=0; i<rest.length; i++){
        product = product*rest[i]
    }
    return product
}

console.log(calculateProduct(2,3,4))
console.log(calculateProduct(5,2,1,3))


console.log("\n question 4");

const createSentence = (...rest)=>rest.join(" ");

console.log(createSentence("JavaScript", "is", "awesome"));

console.log("\n question 5");


const findSum = (...rest)=>{
    let sum = 0;
    for(let i=0; i<rest.length; i++){
        sum = sum+rest[i]
    }
    return sum
}


console.log("sum of numbers:",findSum( 2, 4, 6, 8, 10))


console.log("\n question 6");


const containsValue = (a,...rest)=>{
 for(let i=0; i<rest.length; i++){
    if(a===rest[i]){
        return true
    }
 }
 return false
}
console.log(containsValue(3, 1, 2, 3, 4)); // Output: true
console.log(containsValue("apple", "banana", "orange")); // Output: false



console.log("\n question 7");

const calculateAverage = (...rest)=>{
    let sum = 0;

    for(let i=0; i<rest.length; i++){
        sum = sum+rest[i]
    }

    return sum/rest.length
}


console.log(calculateAverage(10, 5, 15)); // Output: 10
console.log(calculateAverage(2, 4, 6, 8)); // Output: 5