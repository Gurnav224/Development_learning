
console.log('Question 1 ');

const copyAndAppend = (arr,value)=>[...arr,value];
console.log(copyAndAppend(["apple", "orange"], "banana"));

console.log('Question 2');

const copyAndAdd = (nums,value)=>[...nums,value];
console.log(copyAndAdd([10,20],30))

console.log('Question 3');

const mergeTwoArrays = (arr1,arr2) => [...arr1,...arr2];
console.log(mergeTwoArrays([1,2,3],[4,5,6]));

console.log('Question 4');

const mergeNameArrays = (names1, names2)=>[...names1,...names2];
console.log(mergeNameArrays(["Alice", "Bob"], ["John", "Mac", "Maze"]));

console.log('Question 5');

const copyPersonObject = (obje,key,value)=>{
    return {
        ...obje,
        [key]:value
    }
}

console.log(copyPersonObject({firstName: "Alice", age: 20}, "lastName", "Johnson"))



console.log('Question 6');

const copyEmployeeObject = (obje,key,value)=>{
 return {
    ...obje,
    [key]:value
 }
}
console.log(copyEmployeeObject({employeeId: 243, name: "Bob", age: 20}, "department", "IT department"))



console.log('Question 7');

const mergeObjects = (obj1, obj2)=>({...obj1,...obj2});
console.log(mergeObjects({ x: "hello" }, { y: "world" })); // Output: { x: "hello", y: "world" }

console.log("Question 8");

const modifyObjectProperties = (obj1,obj2)=>{
    return {
        ...obj1,
        ...obj2
    }
}

console.log(modifyObjectProperties({ name: "Alice", age: 25 }, { age: 30 })); // Output: { name: "Alice", age: 30 }

console.log(modifyObjectProperties({ fruit: "apple", color: "red" }, { color: "green" }));
// Output: { fruit: "apple", color: "green" }

console.log("Question 9");

const mergeObject = (obj1,obj2)=>({...obj1,...obj2})
console.log(mergeObject({ a: 1, b: 2 }, { b: 3, c: 4 })); // Output: { a: 1, b: 3, c: 4 }



console.log("Question 10");

const mergeThreeArrays = (arr1, arr2,arr3)=>[...arr1,...arr2,...arr3]

console.log(mergeThreeArrays([11, 12], [15, 16, 17], [20, 21]));


console.log("Question 11");
const mergeThreeArray = (arr1,arr2,arr3)=>([...arr1,...arr2,...arr3])

console.log(mergeThreeArray([1, true], ["Are", "You", "Hungry"], [false, 2]));