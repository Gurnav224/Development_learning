


// 1
const echo = <T>(value: T): T => {
  return value;
}
const result1 = echo<string>("Hello, TypeScript");
const result2 = echo<number>(123);

console.log(result1); 
console.log(result2); 

// 2
const getLength = <T>(arr:T[]): number => {
  return arr.length;
}
const result3 = getLength<any>(["apple", false, 123, ]);
const result4 = getLength<string>(["apple", "banana", "orange"]);
console.log(result3)
console.log(result4)


//3

const returnFirst = <T>(items:T[]):T => {
    return items[0]
}

console.log(returnFirst<number>([1,2,4,5,6]))

//4
const wrap = <T>(value:T):T[] => {
    return [value]
}

console.log(wrap<number>(3))

// 5
const logAndReturn = <T>(val:T):T => {
    console.log(val)
    return val
}

console.log(logAndReturn<string>('hello'))



//6

const isEmpty = <T>(arr:T[]):boolean => {
    return arr.length > 0 ? true : false
}

console.log(isEmpty<any>([]))
console.log(isEmpty<number>([1,3,]))


//  7

const containsItem = <T>(arr:T[], item:T):boolean => {
    return arr.includes(item)
}


console.log(containsItem<number>([1,2,3,5],3))
console.log(containsItem<number>([1,2,3,5],33))


// 8


const countOccurences = <T>(arr:T[], item:T):number => {
    let count:number = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === item){
            count++
        }
    }

    return count++
}

console.log(countOccurences<number>([1,1,1,4,5], 1))
console.log(countOccurences<string>(['a','b','c','a',], 'a'))

