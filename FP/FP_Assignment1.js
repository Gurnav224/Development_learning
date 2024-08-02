console.log("FP_Assignment_1");
console.log("\nquestion 1");

const numsArray = [10, 5, 8, 4, 6];

// Output: [ -90, -20, -56, -12, -30 ];

const subtractSquare = numsArray.map((number) => number - (number * number));
console.log(subtractSquare);

console.log("\nprogram 2");
const numbsArray = [3, -2, -5, 12, 8, -4, 7];

// Output: [3, 2, 5, 12, 8, 4, 7]

const subtractedArray = numbsArray.map((num) =>
  num < 0 ? num - num * 2 : num
);

console.log(subtractedArray);

console.log("\nprogram 3");

const sentencesArray = [
  "JavaScript is a powerful programming language.",

  "Web development involves frontend and backend technologies.",

  "Coding is a skill that can be learned and mastered over time.",
];

//   Output:

//   ['JavaScript is a powerful programming language. 6',

//     'Web development involves frontend and backend technologies. 7',

//     'Coding is a skill that can be learned and mastered over time. 12' ];

const addLengthToArray = sentencesArray.map(
  (sentence) => sentence + " " + sentence.split(" ").length
);

console.log(addLengthToArray);

console.log("\nprogram 4");

const cars = [
  { brand: "Toyota", model: "Camry" },

  { brand: "Honda", model: "Accord" },

  { brand: "Ford", model: "Mustang" },
];

// Output: [ 'Toyota', 'Honda', 'Ford' ]

const brands = cars.map((car) => car.brand);

console.log(brands);

console.log("\nprogram 5");
const movies = [
  { title: "Inception", genre: "Sci-Fi" },

  { title: "The Shawshank Redemption", genre: "Drama" },

  { title: "The Dark Knight", genre: "Action" },
];

// Output: [ 'Sci-Fi', 'Drama', 'Action' ]

const genre = movies.map((movie) => movie.genre);

console.log(genre);

console.log("\nprogram 6");

const furniture = [
  { type: "Sofa", width: 200, height: 80 },

  { type: "Table", width: 120, height: 60 },

  { type: "Chair", width: 50, height: 45 },
];

// Output: [{ type: 'Sofa', width: '220.0', height: '88.0' }, { type: 'Table', width: '132.0', height: '66.0' },  { type: 'Chair', width: '55.0', height: '49.5' }]

const increaseDimension = furniture.map((obj) => ({
  ...obj,
  width: (obj.width + obj.width * 0.1).toFixed(1),
  height: (obj.height + obj.height * 0.1).toFixed(1),
}));

console.log(increaseDimension);

console.log("\nprogram 7");

const products = [
  { name: "Laptop", price: 1200 },

  { name: "Smartphone", price: 800 },

  { name: "Headphones", price: 50 },

  { name: "Camera", price: 300 },
];

const addAffordablility = products.map((product) => ({
  ...product,
  affordable: product.price <= 100,
}));

console.log(addAffordablility);

console.log("\nprogram 8");

const numbers = [12, 7, 15, -8, 22, -10, 5, 13, -18];

// Output: [-8, -10, -18]

const negativeNumber = numbers.filter((number) => number < 0);

console.log(negativeNumber);

const students = [
  { name: "Alice", score: 85, activeParticipant: true, club: "Math" },

  { name: "Bob", score: 55, activeParticipant: false, club: "History" },

  { name: "Charlie", score: 75, activeParticipant: true, club: "Science" },
];

// Output: [ { name: 'Alice', score: 85, activeParticipant: true, club: 'Math' }, { name: 'Charlie', score: 75, activeParticipant: true, club: 'Science' } ]

const modifyStudents = students.filter(
  (student) =>
    (student.score > 70 && student.club === "Math") ||
    student.club === "Science"
);

console.log(modifyStudents);


console.log('\nprogram 10')

const words = ["apple", "banana", "kiwi", "grape", "pear", "orange", "strawberry"];



// Output: [ 'banana', 'orange', 'strawberry' ]


const wordsWithAand5 = words.filter((word)=>word.includes('a') && word.length > 5);

console.log(wordsWithAand5)