/*
what is closure
closure is the combination for the function and the lexical environment in which function is defined and also it remember the parent function variable
after finished executing .
*/

function outer() {
  let count = 0;
  return () => {
    
    count++;
    return count;
  };
}

const outerFunc = outer();

console.log(outerFunc());
