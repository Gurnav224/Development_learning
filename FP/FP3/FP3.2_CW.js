// array of object into an object 
let object = [ 
    {key:'name',value:'John'},
   { key:'age',value:25},
   { key:'city',value:'London'},
]

  // {name: "John", age: 25, city: "London"}

  const obj = object.reduce((acc,curr)=>{
    acc[curr.key] = curr.value;
    return acc
  },{})

  console.log(obj)


    // nested array into a single array
const nestedArray = [[1,2],[3,4],[5,6]]
// [1, 2, 3, 4, 5, 6]


const simplifyArray = nestedArray.reduce((acc,curr)=>acc.concat(curr),[]);

console.log(simplifyArray)

// array of objects into an array
const students = [
    {name: "Alice", grade: "A"},
    {name: "Bob", grade: "B"},
    {name: "John", grade: "C"}
  ]
  
  // ["A", "B", "C"]


  const gradeArray = students.reduce((acc,curr)=>{
    acc.push(curr.grade);
    return acc
  },[]);

  console.log(gradeArray)