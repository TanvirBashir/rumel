// mapping array
var numbers1 = [45, 4, 9, 16, 25];

var numbers2 = numbers1.map(function myFunction(value) {
  return value * 2;
});

console.log(numbers2);

var numbers = [45, 4, 9, 16, 25, 22];
var cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
  { type: "Aston", year: 1992 },
  { type: "Aston", year: 1996 },
];
var names = [
  { firstname: "Tanvir", lastname: "Hasan", age: 20 },
  { firstname: "Rumel", lastname: "Hasan", age: 13 },
  { firstname: "John", lastname: "Hasan", age: 12 },
  { firstname: "Tamim", lastname: "Hasan", age: 46 },
  { firstname: "Rokib", lastname: "Hasan", age: 25 },
];

var carsAfter20 = cars
  .filter((v) => v.year > 2001 && v.year < 2030)
  .map((v) => v.type + " " + v.year);

var nameFilter = names
  .filter((v) => v.age > 20 && v.age < 30)
  .map((v) => v.firstname + " is " + v.age + " years old.");
console.log(carsAfter20);
console.log(nameFilter);
