var fruitsArr = ["mango", "banana", "apple", "lemon"];
console.log("Old array:", fruitsArr);
console.log("----------------");

output = fruitsArr.length; // length method
console.log("Method output:", output);
console.log("Updated array:", fruitsArr);
console.log("----------------");

output = fruitsArr[fruitsArr.length - 1]; // finding last item of array
console.log("Method output:", output);
console.log("Updated array:", fruitsArr);
console.log("----------------");

output = fruitsArr.pop(); // Removing an item from array
console.log("Method output:", output);
console.log("Updated array:", fruitsArr);
console.log("----------------");

output = fruitsArr.push("Orange"); // Adding a new item to array
console.log("Method output:", output);
console.log("Updated array:", fruitsArr);
console.log("----------------");

output = fruitsArr.shift();
console.log("Method output:", output);
console.log("Updated array:", fruitsArr);
console.log("----------------");

output = fruitsArr.unshift("Lemon");
console.log("Method output:", output);
console.log("Updated array:", fruitsArr);
console.log("----------------");

output = fruitsArr.splice(2, 2, "avocado", "Kiwi");
console.log("Method output:", output);
console.log("Updated array:", fruitsArr);
console.log("----------------");

output = fruitsArr.splice(0, 1);
console.log("Method output:", output);
console.log("Updated array:", fruitsArr);
console.log("----------------");
