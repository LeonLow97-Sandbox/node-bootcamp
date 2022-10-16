const hobbies = ["Sport", "Cooking"];

// const copiedArray = hobbies.slice(); // copies the array
// console.log(copiedArray);

const copiedArray = [...hobbies]; // copies the array
console.log(copiedArray);

// const toArray = (arg1, arg2, arg3) => {
//     return [arg1, arg2, arg3]
// }

// merge multiple arguments into an array
const toArray = (...args) => {
    return args
}

console.log(toArray(1, 2, 3, 4, 5, 6))
