var txt = "";
var person = { fname: "John", lname: "Doe", age: 25 };
var x;

console.log(person["fname"]);
console.log(person.lname);

for (x in person) {
  txt += `${person[x]} some `;
}
console.log(txt);

person.nationality = "English";

console.log(person);

delete person.nationality; //dont use

console.log(person);

person.age = undefined;
console.log(person);

// object with method

person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.fullName());

console.log(person.firstName.toUpperCase());

console.log(JSON.stringify(person));

console.log(person);
