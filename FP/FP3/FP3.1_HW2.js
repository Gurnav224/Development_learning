
console.log('FP3.1_HW2');
console.log('\nprogram 1')

const stationeryWords = [

    "pen",
  
    "notebook",
  
    "eraser",
  
    "notebook",
  
    "pencil",
  
    "notebook",
  
    "pencil",
  
  ]


  const totalStringLength = stationeryWords.reduce((string,currentWord)=>string+currentWord,'').length;

  console.log(totalStringLength);


  console.log('\nprogram 2');

  const numbersArray = [1, 2, 3, 4, 5, 6];

  const evenSum = numbersArray.reduce((totalSum,currentNumber)=> currentNumber % 2===0 ? totalSum + currentNumber: totalSum, 0 );

  console.log(evenSum);


  console.log('\nprogram 3');


  const numsArr = [11, 22, 32, 14, 15, 62, 17, 18, 29, 10];

  

  const countOddNumber = numsArr.reduce((arrayOfOdd,currentNumber)=>currentNumber % 2 !==0 ? [...arrayOfOdd,currentNumber] : arrayOfOdd,[]).length;

  console.log(countOddNumber);


  console.log('\nprogram 4');


  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//   const eventOddCount = nums.reduce((obj,currentNumber)=>{
//     currentNumber % 2 === 0 ? obj['even'] = (obj['even'] || 0) + 1 : obj['odd'] = (obj['odd'] || 0) +1

//     return obj
//   },{});


const eventOddCount = nums.reduce((obj,currentNumber)=>{
    if(currentNumber % 2 ===0 ){
        obj.even = (obj.even || 0) +1;
    }
    else{
        obj.odd = (obj.odd || 0) +1;
    }
    return obj
},{})

  console.log(eventOddCount)

  // Output: { even: 4, odd: 5 }



  console.log('\nprogram 5');

  const allNumns = [1, 2, -3, 4, 5, -6, 7, -8, -9, 12];

  const countOfPosAndNeg = allNumns.reduce((countObj,currentNumber)=>{
    if(currentNumber>0){
        countObj.pos = (countObj.pos || 0) +1;
    }
    else{
        countObj.neg = (countObj.neg || 0) +1;
    }
    return countObj
  },{})

  console.log(countOfPosAndNeg);


  console.log('\nprogram 6');


  const numPositive = [-2, 3, 4, 0, -5, 6];

  const productOfNegtive = numPositive.reduce((product,currentNumber)=>currentNumber<0 ? product*currentNumber : product, 1);

  console.log(productOfNegtive)


  console.log('\nprogram 7')

  const wordsCaps = ["reduce", "method", "needs", "a", "lot", "of", "practice"]

  const capitalizeLetter = wordsCaps.reduce((string,currentWord)=>string + currentWord.toUpperCase()+" ","");



  console.log(capitalizeLetter);

  console.log('\nprogram 8')

  const allNumsArr = [1, 2, -3, 4, 5, -6, 7, -8, -9, 12];

  const countOfEvenAndOther = allNumsArr.reduce((countObj,currentNumber)=>{
    if(currentNumber % 2 ===0 && currentNumber  > 0){
        countObj.posEven = (countObj.posEven || 0) + 1
    }
    else{
        countObj.others = (countObj.others || 0) +1
    }
    return countObj
  },{})


  console.log(countOfEvenAndOther)


  console.log('\nprogram 9');

  const numbersArr = [1, -2, -3, 4, -5, 6, 7, -9, 12, 11];

  const sumOfNegOdd = numbersArr.reduce((totalSum,currentNumber)=>(currentNumber<0 && currentNumber % 2 !==0) ? totalSum + currentNumber : totalSum , 0);

  console.log(sumOfNegOdd)


  console.log('\nprogram 10');

  const letters = ["a", "l", "p", "h", "a", "b", "e", "t"]

const word = letters.reduce((str,currentLetter)=>str+currentLetter,'');

console.log(word)