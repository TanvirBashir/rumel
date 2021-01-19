// object with method

person = {
  firstName: "John",
  lastName: "Doe",
  id: 66,
  fullName: () => {
    return person.firstName + " " + person.lastName;
  },
};
console.log(person.fullName());

// modifying a method inside object

person.fullName = function () {
  return this.id + this.lastName;
};

console.log(person.fullName());

// using built-in method

name = "rumel";

console.log(name.toUpperCase());
console.log(name.toLowerCase());

// adding an array to object

person.myArray = [1, 35, 56, 6];

console.log(person);

person.myArray[0] = "Rumel";

console.log(person);

// getter method

var person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language;
  },
  lang: function () {
    return this.language;
  },
};

person.lang()