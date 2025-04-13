

const urlify = (str:string):string => {
	// your code here
    return str.split(' ').join('%20%')
}

console.log(urlify("neog camp is back"));
// Expected Output: neog%20%camp%20%is%20%back