
// closure example

/*
a closure is combination of function + lexical scope 
*/

function closure(){
    let discuss = 'hello how your';

    function innerFunc(){
        console.log(discuss)
    }

    return innerFunc
}

const close = closure();

// close();

function counter(){
    let count = 0;

    function incCount(){
        count++;
        console.log(count)
    }
    return incCount
};

const printCounter = counter();

printCounter();
printCounter()