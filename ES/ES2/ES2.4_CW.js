

// arrow function to return the sum of arr ;

const sumOfArr = (arr)=>{
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum = sum+arr[i]
    }
    return sum
}

console.log(sumOfArr([1,2,3,4,5]));


// write an arrow function to reverse the string;


const reverseString = (str)=>{
    let reverseStr = '';

    for(let i= str.length-1; i>=0; i--){
        reverseStr = reverseStr+ str[i]
    }
    return reverseStr
}


console.log(reverseString('hello world'))