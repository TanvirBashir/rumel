let parent = (a, b, c, child) => {
  console.log(`${a} ${b} ${c} `);
  child(a, b, c);
};
let child = (a, b, grandChild) => {
  console.log(`${a} ${b}`);
  grandChild(a, b);
};
let grandChild = (a, b) => {
  console.log(`${a} ${b}`);
};

parent(1, 2, 4, child);
