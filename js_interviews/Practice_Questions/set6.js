(function() {
	var objA = new Object({foo: "foo"});
	var objB = new Object({foo: "foo"});
	console.log(objA == objB);
	console.log(objA === objB);
}());

let numbers = [1, 2, 3, 4, NaN];
console.log(numbers.indexOf(NaN));

let [a, ...b] = [1, 2, 3, 4, 5];
console.log(a, b);


function area({ length = 10, width = 20 }) {
    console.log(length * width);
  }
  
  area({})  


  const props = [
    { id: 1, name: "John" },
    { id: 2, name: "Jack" },
    { id: 3, name: "Tom" }
  ];
  
  const [, , { name}] = props;
  console.log(name);
  

  function add(item, items = []) {
    items.push(item);
    return items;
  }
  
  console.log(add("Orange"));
  console.log(add("Apple"));