
// question 1 

const calculateArrAverage = (arr)=>{
    let total = 0;
    for(let i=0; i<arr.length; i++){
        total = total+arr[i]
    }
    return total/arr.length;
}

console.log(calculateArrAverage([5,10,15]))

// question 2

const reverseString = (str)=>{
    let revStr= '';
    for(let i=str.length-1; i>=0; i--){
        revStr = revStr+str[i]
    }
    return revStr
}

console.log(reverseString('world'))


// quesion 3

const findLongestWord = (arr)=>{
    let longest = arr[0];

    for(let i=1; i<arr.length; i++){
        if(longest.length < arr[i].length){
            longest = arr[i]
        }
    }
    return longest
}

console.log(findLongestWord(["apple", "banana", "grapefruit"]))

// question 4;


const calculateStringLength = (string)=>{
    let count = 0;
    for(let i=0; i<string.length; i++){
        count++
    }
    return count
}

console.log(calculateStringLength('hello'))


// question 5;

const students = [
    { name: "Alice", age: 20, grade: 85 },
    { name: "Bob", age: 22, grade: 92 },
    { name: "Charlie", age: 19, grade: 88 }
  ];


  const calculateAverageGrade=(arr)=>{
    let totalgrade = 0;
    for(let i=0; i<arr.length; i++){
        totalgrade = totalgrade+arr[i].grade
    }
    return totalgrade/arr.length
  }

  console.log('5.1: Average Grade: ',calculateAverageGrade(students));

  const getNames = (arr)=>{
    let names = [];
    for(let i=0; i<arr.length; i++){
        names.push(arr[i].name)
    }
    return names
  }

  console.log('5.2: Name of Students: ',getNames(students))


  const calculateAverageAge = (arr)=>{
    let totalAge = 0;
    for(let i=0; i<arr.length; i++){
        totalAge = totalAge+arr[i].age
    }
    return totalAge/arr.length
  }


  console.log('5.3: Average Age: ',calculateAverageAge(students));



  const highestGrade = (arr)=>{
    let highgrader = []
   for(let i=0; i<arr.length; i++){
    if(arr[i].grade>=90){
        highgrader.push(arr[i])
    }
   }
   return highgrader
  }

  console.log('5.4: highest grade:',highestGrade(students));


  const isAnyBelow = (arr)=>{
    for(let i=0; i<arr.length;  i++){
        if(arr[i].age<18){
            return true
        }
    }
    return false
  }

  console.log('5.5: age below 18',isAnyBelow(students));


  const findStudentByName = (arr,name)=>{
    for(let i=0; i<arr.length; i++){
        if(arr[i].name===name){
            return arr[i]
        }
    }
  }

  console.log("5.6: student by name",findStudentByName(students,'Charlie'));


  const highestScoreStudent = (arr)=>{
    let names = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i].grade > 85){
            names.push(arr[i].name)
        }
    }
    return names;
  }

  console.log('5.7: highest Scorer: ',highestScoreStudent(students))