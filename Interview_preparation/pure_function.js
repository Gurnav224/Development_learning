
// what is pure vs impure function in javascript

// pure function are produce same output for same input


// code

function add(a, b) {
  return a + b;
}

add(2,3) // 5

// impure function change or modify the result or variable

let total = 0;
function add(a) {
  total += a;
}


add(3)