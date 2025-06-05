// a closure is the combination of function and lexical enviroment within which that was function declared
// inner function have access the outer function after excuting it

function outer(){
    let name = 'I am innner variable';
    return function(){
        console.log(name)
    }
}


outer()()


// example 2


function counterOuter(){
    let counter = 0;

    function innerCounter(){
        return counter++
    }
    return innerCounter
}

const counter = counterOuter()

console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())