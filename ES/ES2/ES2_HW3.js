

// question 1;


const personObje = (firstName,lastName)=>({firstName:firstName,lastName:lastName});

console.log(personObje('Rahul','Mandu'))

// question 2;

const stringDetailsObj = (str)=>({length:str.length,text:str.toUpperCase()});

console.log(stringDetailsObj('Hello'))

// question 3

const personObj = (firstName,lastName,age,phoneNumber)=>{
    let person = {
        firstName:firstName,
        lastName:lastName,
        age:age,
        phoneNumber:phoneNumber
    }
    return person
}

console.log(personObj('vishal','rana',22,923923923));


// question 4;

const stringConcate = (str1,str2)=>{
    let fullStr = str1+str2;
    return {
        concatenation:fullStr,
        length:fullStr.length
    }
}

console.log(stringConcate('Hello','World'))

// question 5;

const printCircleDetails = (radius)=>{
    let circumference = 2*Math.PI*radius;
    let areaOfCircle = Math.PI*radius*radius;
    return {
        circumference:circumference,
        areaOfcirlce:areaOfCircle
    }
}

console.log(printCircleDetails(5))

// question 6

const calculateDifferenceAndQuotient = (a,b)=>{
    return {
        difference:a-b,
        quotient:a/b
    }
}

console.log(calculateDifferenceAndQuotient(10,2))

// question 7

// give the sentence word count 

const analyzeSentence = (str)=>({wordCount:str.split(' ').length});

console.log(analyzeSentence('JavaScript is fun'))


// question 8

const calculateSquareAndCube = (num)=>{
    let square = num*num;
    let cube = num*num*num;
    return {
        square:square,
        cube:cube
    }
}

console.log(calculateSquareAndCube(4));

// question 9;


const checkNumber = (number)=>{
    
    return {
        isPostive:number>0,
        isNegative:number<=0
    }
}

console.log(checkNumber(-7))