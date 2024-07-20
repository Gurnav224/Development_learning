// 1. Write an arrow function that creates an object with a dynamic field based on the provided key and value.

// console.log(createObjectWithDynamicField("name", "Alice"));
// // Output: { name: "Alice" }

// console.log(createObjectWithDynamicField("age", 25));
// // Output: { age: 25 }

console.log('\question 1')

const createObjectWithDynamicField = (key,value)=>({[key]:value});

console.log(createObjectWithDynamicField('name','Alice'));
console.log(createObjectWithDynamicField('age',25));

// 2. Write an arrow function that adds a dynamic field to an existing object.

// // Output: { name: "Bob", age: 30, city: "New York" }

// // Output: { fruit: "apple", color: "red", quantity: 3 }


console.log('\nquestion 2 ')


const addObjectField = (obj,key,value)=>({...obj,[key]:value});

console.log(addObjectField({ name: "Bob", age: 30 }, "city", "New York"));

 console.log(addObjectField({ fruit: "apple", color: "red" }, "quantity", 3));


 // 3. Write an arrow function that adds a dynamic field to an existing object.

// Output: {productName: "Side Table", color: "Walnut Brown", inStock: true}

// Output: {productName: "Dining Table", color: "White", inStock: false}

console.log('\nquestion 3')

const addObjField = (obj, key,value)=>({...obj,[key]:value})

console.log(addObjField({ productName: "Side Table", color: "Walnut Brown" }, "inStock", true));
console.log(addObjField({ productName: "Dining Table", color: "White" }, "inStock", false));



// 4. Write an arrow function that updates a field dynamically in an existing object.

// Output: {name: "Charlie", age: 29 }


// Output: {city: "Paris", country: "Spain" }


console.log('\n question 4')

const updateObjectField = (obj,key,value)=>({...obj,[key]:value})

console.log(updateObjectField({ name: "Charlie", age: 28 }, "age", 29));
console.log(updateObjectField({ city: "Paris", country: "France" }, "country", "Spain"));



// 5. Write an arrow function that updates a field dynamically in an existing object.

console.log('\n question 5')

const updateProductObject = (obj,key,value)=>({...obj,[key]:value})

console.log(updateProductObject({ productName: "Side Table", inStock: true}, "inStock", false));
// Output: {productName: "Side Table", inStock: false }

console.log(updateProductObject({ productName: "Dining Table", color: "White", inStock: false}, "inStock", true));
// Output: {productName: "Dining Table", color: "White", inStock: true}


console.log('question 6 \n')

// 6. Write an arrow function that dynamically generates an object with multiple fields.

const generateObject = (...rest)=>{
    const [animal,dog,sound,Bark] = rest;
    return {
        [animal]:dog,
        [sound]:Bark
    }
}

console.log(generateObject("animal", "Dog", "sound", "Bark"));
// Output: { animal: "Dog", sound: "Bark" }

console.log(generateObject("fruit", "Banana", "color", "Yellow"));
// Output: { fruit: "Banana", color: "Yellow" }


console.log('question 7 \n')

// 7. Write an arrow function that dynamically generates an object with multiple fields.

const generateObj = (...rest)=>{
    const [mealType, Lunch,meal,Rice_dal,calorie,intake] = rest;
    return {
        [mealType]:Lunch,
        [meal]:Rice_dal,
        [calorie]:intake
    }
}

console.log(generateObj("mealType", "Lunch", "meal", "Rice-Dal", "calorie", "200 Cal"));
// Output: { mealType: "Lunch", meal: "Rice-Dal", calorie: "200 Cal" }

console.log(generateObj("mealType", "Dinner", "meal", "Chapati-Dal", "calorie", "180 Cal"));
// Output: { mealType: "Dinner", meal: "Chapati-Dal", calorie: "180 Cal" }




console.log('question 8 \n')

// 8. Write an arrow function that creates an object with a dynamic field based on the provided key and value.

const createNewObjectWithDynamicField = (...rest)=>{
    const [name,nameValue,color,colorValue,isMarried,status] = rest;
    return {
        [name]:nameValue,
        [color]:colorValue,
        [isMarried]:status
    }
}

console.log(createNewObjectWithDynamicField("name", "Maze", "favColor", "Pink", "isMarried", false));
// Output: { name: "Maze", favColor: "Pink", isMarried: false }

console.log(createNewObjectWithDynamicField("age", 35, "hobby", "Cooking", "isMarried", true));
// Output: { age: 35, hobby: "Cooking", isMarried: true }