// implicity binding

let person = {
  name: "Anurag",
  ask: function () {
    return this.name;
  },
};

console.log(person.ask());

// explicity binding

// call
function printName() {
  console.log(this.name);
}

let student = {
  name: "Akansha",
};

printName.call(student);

// binding

function printName2() {
  console.log(this.name);
}

let poke = {
  name: "kfaslkfd",
};

const bin = printName2.bind(poke);

bin();
