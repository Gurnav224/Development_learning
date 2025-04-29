function Person(name) {
    this.name = name;
  }
  
  // Adding method to the prototype
  Person.prototype.sayHi = function () {
    console.log(`Hi, I'm ${this.name}`);
  };
  
  const user = new Person("Gurnav");
  user.sayHi(); // Hi, I'm Gurnav
  