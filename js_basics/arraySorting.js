var fruits = ["Banana", "Orange", "Apple", "Mango"];
var points = [40, 100, 1, 5, 25, 200, 10];

var sortNormal = fruits.sort();

console.log(fruits);

var sortReverse = fruits.reverse();

console.log(sortReverse);

var sortNormal = points.sort();

console.log(sortNormal);

var numSort = points.sort(function (a, b) {
  return a - b;
});

console.log(numSort);

var numSortReverse = points.sort(function (a, b) {
  return b - a;
});

console.log(numSortReverse);

var numSortRandom = points.sort(function (a, b) {
  return 0.5 - Math.random();
});

console.log(numSortRandom);

console.log(cars);

var cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
  { type: "Aston", year: 1992 },
];

var objSortByYear = cars.sort((a, b) => (a.year > b.year ? 1 : -1));

console.log(objSortByYear);

var mars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
  { type: "Aston", year: 1992 },
  { type: "Aston", year: 1996 },
];

var objSortByYearReverse = cars.sort((a, b) => (a.year > b.year ? -1 : 1));

console.log(objSortByYearReverse);

// var objSortByYearRevs = objSortByYear.sort((a, b) => (a.year > b.year ? -1 : 1));

// console.log(objSortByYearRevs)

// var objSortAlp = cars.sort(function(a, b){
//                             var x = a.type.toLowerCase();
//                             var y = b.type.toLowerCase();
//                             if (x < y) {return -1;}
//                             if (x > y) {return 1;}
//                             return 0;
//                         });

// console.log(objSortAlp)
