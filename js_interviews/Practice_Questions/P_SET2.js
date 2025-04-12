// Given an array of numbers. Find the value of the first element with a value over 21.


const ages = [5, 10, 18, 30, 21, 22];

const above21 = ages.find(age => age > 21);

console.log(above21)

// create an input field and take age as input from the user. Create a button to check age. If the age is more than 21, render the age to the view in orange colour else render the age in blue colour.

const age = document.querySelector('#age');
const button = document.querySelector('button');
const output = document.querySelector('#output');

button.addEventListener('click', function(){
    const value = age.value;
    if(value > 21){
        output.classList.add('orange')
    }
    else{
        output.classList.add('blue')
    }
    output.innerHTML = `Your current age ${value} `
})


const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const accBtn = document.querySelector('#accept-button');
const output2 = document.querySelector('#output2');

function checkInput(){
    if(firstName.value.trim() && lastName.value.trim()){
        accBtn.disabled = false
    }
    else{
        accBtn.disabled = true
    }
}


firstName.addEventListener("input", checkInput);
lastName.addEventListener('input', checkInput);



accBtn.addEventListener('click', function() {
    const name = firstName.value +" "+ lastName.value;
    output2.innerHTML = name
})