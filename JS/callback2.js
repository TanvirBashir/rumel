let parent = (a, b, sum, child) => {
  console.log(`${a} ${b} in parent`);
  sum = a + b;
  child(sum);
};
let child = (sum) => {
  console.log(`${sum} in child`);
};

parent(1, 3, child(2));
