1. What will be the output of the following code?
    
    ```jsx
    (function() {
    	var objA = new Object({foo: "foo"});
    	var objB = new Object({foo: "foo"});
    	console.log(objA == objB);
    	console.log(objA === objB);
    }());
    
    ```
    
    A. false true
    
    **B. false false**
    
    C. true false

    // solution  : IIFE is invoked immediately after it is defined 
    create new scope , while comparing with == and === return false
    because it each have different memory location

    2. What will be the output of the following code?
    
    ```jsx
    console.log(10 == [10]);
    console.log(10 == [[[[[[[10]]]]]]]);
    
    ```
    
    **A. True, True**
    
    B. True, False
    
    C. False, False

    // number = [] it will corece to number 
    when using == , javascript tries to convert both side to common 
    type before comparing


    3. What will be the output of the following code?
    
    ```jsx
    console.log(10 + "10");
    console.log(10 - "10");
    
    ```
    
    A. 20, 0
    
    **B. 1010, 0**
    
    C. 1010, 10-10

    // 1. convert it  into string concatenate them to 1010
    // 2. convert it number value and 10-10 output will 0

    4. What will be the output of the following code?
    
    ```jsx
    console.log([1, 2] + [3, 4]);
    
    ```
    
    A. [1,2,3,4]
    
    B. [1,2][3,4]
    
    **C. 1,23,4**

    // convert them into string and concatnate them c answer is correct


    5. What will be the output of the following code?
    
    ```jsx
    console.log(NaN === NaN);
    
    ```
    
    A. true
    
    **B. false**
    
    C. throws error

    // false because it will respresent the result of numeric 
    operation that doesn't product meaningfull  answer

    console.log(0 / 0);     // NaN
console.log(Math.sqrt(-1)); // NaN
console.log(parseInt("abc")); // NaN


6. What will be the output of the following code?
    
    ```jsx
    let numbers = [1, 2, 3, 4, NaN];
    console.log(numbers.indexOf(NaN));
    
    ```
    
    A. 4
    
    B. NaN
    
    **C. -1**

    // 4 

    indexOf() uses strict equality (===) internally

    NaN === NaN false  so it return -1 


    7. What will be the output of the following code?
    
    ```jsx
    let [a, ...b] = [1, 2, 3, 4, 5];
    console.log(a, b);
    
    ```
    
    **A. 1, [2, 3, 4, 5]**
    
    B. 1, {2, 3, 4, 5}
    
    C. Syntax Error

    // array destructuring extract array first index value to variable a



8. What will be the output of the following code?
    
    ```jsx
    function area({ length = 10, width = 20 }) {
      console.log(length * width);
    }
    
    area();
    
    ```
    
    **A. Error**
    
    B. 200
    
    C. undefined


// output is error because not passing any argument in when call the function

9. What will be the output of the following code?
    
    ```jsx
    const props = [
      { id: 1, name: "John" },
      { id: 2, name: "Jack" },
      { id: 3, name: "Tom" }
    ];
    
    const [, , { name }] = props;
    console.log(name);
    
    ```
    
    A. John
    
    **B. Tom**
    
    C. Error
    // and skip first two element due , in the array 
    // it will print tom because doing destructring of props


      10. What will be the output of the following code?
    
    ```jsx
    function add(item, items = []) {
      items.push(item);
      return items;
    }
    
    console.log(add("Orange"));
    console.log(add("Apple"));
    
    ```
    
    A. 1st console will print ['Orange'] and 2nd console will print ['Orange', 'Apple']
    
    B. Both consoles will print empty array - []
    
    **C. 1st console will print ['Orange'] and 2nd console will print ['Apple']**

    // option c is correct because every we call the function
    it create new function context and memory allocation 
    so that's both call items represent different memory location 