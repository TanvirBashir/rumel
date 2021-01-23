// let result = (a, b) => {
//   console.log(a + b);
// };

// result(3, 4);

let parentFunc = (a, b, child) => {
  child(a, b);
  console.log(a + b);
};

let child = (c, d) => {
  console.log(`${c} and ${d}`);
};
let anotherChild = (c, d) => {
  console.log(c - d);
};

parentFunc(2, 3, anotherChild);

let obj = {
  first: "name",
  someMethod: (x, y) => {
    return x + y;
  },
};

console.log(`${obj.first} ${obj.someMethod(4, 4)}`);
