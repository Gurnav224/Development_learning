let numberArray = [];
const addNumber = (number) => (argNumberArray) =>
  argNumberArray.concat([number]);

addNumber(7)(numberArray)


function calculateSum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  console.log(calculateSum(...numbers));