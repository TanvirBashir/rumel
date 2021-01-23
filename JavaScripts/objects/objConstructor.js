function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Desi", "Joe", 50, "Red");

console.log(myFather);
console.log(myMother);

function Car(name, topSpeed, color) {
  this.name = name;
  this.topSpeed = topSpeed;
  this.color = color;
  this.topSpeedMph = function (s) {
    return `${this.topSpeed + s} mph`;
  };
}

const myCar = new Car("Farrari", 0, "Black");

let currentSpeed = 0;

let int = setInterval(currentSpeedRun, 10);

function currentSpeedRun() {
  if (currentSpeed == 19) {
    clearInterval(int);
  }
  currentSpeed++;
  //   myCar.topSpeedMph(i);
  console.log(myCar.topSpeedMph(currentSpeed));
}

// console.log();
