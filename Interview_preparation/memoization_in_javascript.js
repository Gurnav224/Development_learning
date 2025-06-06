// memoization in javascript is performance optimization technique that store result of expensive call function into the cache and returning the result when same input occurs again


function memoize(func){
    let cache = {};
    return function (...args){
        const key = JSON.stringify(args);
        if(cache[key]){
            return cache[key]
        }
        const result = func(...args)
        cache[key] = result;

        return result
    }

}



function addSlow(...args){
    
    
    return args.reduce((sum, curr) => sum+ curr,0)
}

const memoizationSum = memoize(addSlow)


console.log(
    memoizationSum(1,2)

)

console.log(memoizationSum(1,2,3,3,4,5))
console.log(memoizationSum(1,2,3,3,5))
console.log(memoizationSum(1,2,3,3,5, 32900000))