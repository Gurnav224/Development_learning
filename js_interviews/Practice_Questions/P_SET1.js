/*
Given an array of numbers, return a new array that only has the numbers that are 8 or smaller.
*/
const arrOfNumbers = [3, 6, 10, 8, 2, 5, 13, 15]

const smallerThan8 = arrOfNumbers.filter((num) => num <= 8);

console.log(smallerThan8)


/*

Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length.
*/
const arrOfWords = ["neoG", "is", "family", "love", "hackathon", "camping"]

const newWord = arrOfWords.filter((str) => str.length < 5 );

console.log(newWord)


// Given an array of objects. Return an array with all the male characters.

const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        eye_color: 'orange',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        eye_color: 'blue',
        gender: 'male',
    },
];

const maleCharactersOnly = characters.filter((ch) => ch.gender === "male");
console.log(maleCharactersOnly)

const charactersHeight = characters.filter((ch) => ch.height > 170);

console.log(charactersHeight)

const output = document.querySelector('#output');


const maleHeight = characters.filter((ch) => ch.gender === "male" && ch.height > 180);

output.innerHTML = maleHeight.map((ch) => {
    return `<h1 class="${ch.eye_color}"> ${ch.name} <h1>`
}).join(', ')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       