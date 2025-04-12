

2405
 const name = "Dave";
const age = 40;
const myData = { name, age };
console.log(myData);


const person = {
    fullName: function (city, country) {
      console.log(this.firstName + " " + this.lastName + "," + city + "," + country);
    }
  };
  
  const person1 = {
    firstName: "John",
    lastName: "Doe"
  };
  
  person.fullName.call(person1, "Oslo", "Norway");
  

  const person3 = {
    fullName: function (city, country) {
      console.log(
        this.firstName + " " + this.lastName + "," + city + "," + country
      );
    }
  };
  
  const person2 = {
    firstName: "John",
    lastName: "Dave"
  };
  
  person3.fullName.call(person2, ["Oslo", "Norway"]);

  console.log(   Math.min(1,2,3)
)
console.log( Math.min.apply(null, [1,2,3])
)


const person = {
    firstName: "Mary",
    lastName: "Doe",
    display: function () {
        console.log(this.firstName + " " + this.lastName);
    }
};

setTimeout(person.display.bind(person), 3000);



const person = {
    firstName: "neoG",
    lastName: "Camp",
    display: function () {
        console.log(this.firstName + " " + this.lastName);
    }
};

let display = person.display.bind(person);
setTimeout(display, 3000);


