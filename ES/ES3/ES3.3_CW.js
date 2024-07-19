
// spread operator

// duplicate array

let numarr = [1,2,3,4,5];

let duplicateArr= [...numarr];

duplicateArr.push(4);

console.log("New Arr",duplicateArr);


console.log("original Array: ",numarr);



const duplicateArray = (arr)=>([...arr]);
console.log(duplicateArray(['apple','banana']))


// adding new element to the array

const arrElement = (arr,Element)=>[...arr,Element];
console.log(arrElement(['kiwi','banana'],'mango'))


// combining two arrays

const combineArray = (arr1,arr2)=>[...arr1,...arr2];
console.log(combineArray(['apple','mango','kiwi'],['one','two','three']))

//copying object 

const copyObj = (obj)=>({...obj});

console.log(copyObj({
    name:'Abhi',
    age:29
}))

// adding new property to obj using spread operator

const addingObj = (obje,key,value)=>({...obje,[key]:value});

console.log(addingObj({
    name:'Abhi',
    age:29
},'grade',98))