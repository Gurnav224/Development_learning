
// ES6_Practice_SET4;

console.log('\nProgram 1')

const getMaxElement = (arr) =>{
    let max = arr[0];

    for(let i = 0; i < arr.length; i++){

        if(arr[i] > max) {
            max = arr[i]
        }

    }
    return max
}


let array = [4,78,8,3,6,0,12,34]
console.log(getMaxElement(array)) 

console.log('\nProgram 2');

const calculateAverage = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }

    return sum/arr.length;
}


console.log(calculateAverage([1, 2, 3, 4, 5])); 


console.log('\nProgram 3');


const convertEvenToOdd = (arr) => {
    let oddarr = [];

    for(let i=0; i < arr.length; i++) {

        if( arr[i] % 2 === 0){

            oddarr.push(arr[i] + 1)
        }
        else{
            oddarr.push(arr[i])
        }
    }

    return oddarr
}

var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(convertEvenToOdd(numArr));


console.log('\nProgram 4')

const filterWords = (arr) => {
    let longwords = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > 5){
            longwords.push(arr[i])
        }
    }

    return longwords
}

var words = ["eat", "sleep", "code", "repeat", "neog", "community"];
console.log(filterWords(words)) 


console.log('\nProgram 5');

const capitalizeWords = (arr) => {
    let capitalWord = [];
    for(let i = 0; i < arr.length; i++){
        capitalWord.push(arr[i].toUpperCase())
    }
    return capitalWord
}


console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]))

console.log('\nProgram 6')


const getValues  = (arr , key) => {
    let nameArrays = []

    for(let i=0; i < arr.length; i++){
        nameArrays.push(arr[i][key])
    }
    return nameArrays
}

console.log(
    getValues(
      [
        { name: "John", age: 21 },
        { name: "Mary", age: 22 },
        { name: "Peter", age: 23 },
      ],
      "name"
    )
  ); 


  console.log('\nProgram 7')

const podAndTeamAllocation = (obj) => ({...obj,teamId:667543})

  const userData = { firstName : "John", lastName: "Dee" }
console.log(podAndTeamAllocation(userData))


console.log('\nProgram 8');

const checkForTeam = (player)  =>  player.team ? player : {...player,team:"A"}


console.log(checkForTeam({firstName: 'Penn', lastName: 'Ma'}))

console.log(checkForTeam({firstName: 'John', lastName: 'Dee', team: 'B'}))

console.log(checkForTeam({firstName: 'Priya', lastName: 'Raj'}))


console.log('\nProgram 9')


const book = { 
    title: 'JavaScript: The Definitive Guide',  
    authors: [{name: 'David Flanagan', age: 49 }, { name: 'Yukihiro Matsumoto', age: 57 }],  
    publisher: {name: "O'Reilly Media", location: 'CA'}
};

// Your ES6 code here

const {title, authors:[{name:author1},{name:author2}] , publisher:{name:publisherName}} = book

console.log(title); // JavaScript: The Definitive Guide
console.log(author1); // David Flanagan 
console.log(author2); // Yukihiro Matsumoto
console.log(publisherName); // O'Reilly Media


console.log('\nProgram 10');

var array2 = [
    {
        name: "Jay",
        age: 60
    },
    {
        name: "Gloria",
        age: 36
    },
    {
        name: "Manny",
        age: 16
    },
    {
        name: "Joe",
        age: 9
    }
];


const sumOfAges = (arr) => {
    let sumAge = 0;

    for(let i = 0; i < arr.length; i++){
        sumAge = sumAge + arr[i].age;
    }

    return sumAge
}

console.log(sumOfAges(array2)); // 121


