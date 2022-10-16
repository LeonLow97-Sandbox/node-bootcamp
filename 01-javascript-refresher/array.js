let arr1 = ["Leon", "Daniel"];

arr1.push("Eugene"); // does not create a copy (stores the value in the same memory address)
console.log(arr1);

let arr2 = ["Leon", "Daniel"];
let arr3 = arr2.concat("Eugene"); // creates a copy
console.log(arr2);
console.log(arr3);
