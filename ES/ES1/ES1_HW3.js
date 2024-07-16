
let myArray =  [5, 12, 7, 25, 18, 3];

console.log('exercise 1')

function printArray(arr){
    return arr;
}

console.log(printArray(myArray));

console.log('exercise 2')


function add10ToEachArrValue(arr){
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        newArr.push(arr[i]+10)
    }
    return newArr
}

console.log(add10ToEachArrValue(myArray))


console.log('exercise 3')


function convertOddNumberToEven(myArray){
    let evenArr = [];

    for(let i=0; i<myArray.length; i++){
        if(myArray[i]%2===1){
            evenArr.push(myArray[i]+1)
        }
        else{
            evenArr.push[myArray[i]]
        }
    }

    return evenArr
}


console.log(convertOddNumberToEven(myArray))


console.log('exercise 4')


function printEvenArr(myArray){
    let evenArr = [];
    for(let i=0; i<myArray.length; i++){
        if(myArray[i]%2===0){
            evenArr.push(myArray[i])
        }
    }

    return evenArr
}

console.log(printEvenArr(myArray));


console.log('exercise 5')


function printSumOfMyArray(myArray){
    let sum = 0;
    for(let i=0; i<myArray.length; i++){
        sum  = sum+ myArray[i]
    }
    return sum
}

console.log(printSumOfMyArray(myArray))


console.log('exercise 6');

function printSumOfEvenAndOdd(myArray){
    let oddSum = 0;
    let evenSum = 0;

    for(let i=0; i<myArray.length; i++){
        if(myArray[i]%2===0){
            evenSum = evenSum+myArray[i]
        }
        else{
            oddSum = oddSum+myArray[i]
        }
    }
    console.log('oddSum: ',oddSum);
    console.log('evenSum: ',evenSum);
}

printSumOfEvenAndOdd(myArray);