
const restExample = (a,b,...rest)=>{
    console.log(a)
    console.log(b)
    console.log(rest)
}

restExample(1,2,3,4,5,6,7)

const concatinateStrings = (...strings)=>strings.join(" ");

console.log(concatinateStrings("hello ","world"))
console.log(concatinateStrings("javascript ","is","fun"))

const countArguments = (...args)=>args.length;

console.log(countArguments(1,2,'hello','joy'))
console.log(countArguments("Good","job"))