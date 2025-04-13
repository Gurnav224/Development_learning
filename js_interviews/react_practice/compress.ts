const compressString = (str: string): string => {
	// your code here
	const strArr: string[] = str.split('');
	const obj:{[key:string]:number} = {};
	for (let i = 0; i < strArr.length; i++) {
		obj[ strArr[ i ] ] = (obj[ strArr[ i ] ] || 0) + 1
	}
	return Object.entries((obj)).map(([ key, value ]) => `${key}${value}`).join('')

}

console.log(compressString("aaaabbccc"));

// Expected Output: a4b2c3


// approach 2

const compressString2 = (str:string) => {
	let result:string = '';
	let count = 1;

	for(let i = 0; i < str.length; i++){
		if(str[i] === str[i+1]){
			count++
		}
		else{
			result += str[i] + count
			count = 1
		}

	}
	return result
}


console.log(compressString2('aaaabbcccc'))