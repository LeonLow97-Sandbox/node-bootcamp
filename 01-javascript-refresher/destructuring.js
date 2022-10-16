const person = {
  fullname: "Leon",
  age: 25,
};

const { fullname, age } = person;

console.log(fullname, age);

// can also destructure array
const hobbies = ["Sports", "Cooking"];
const [hobby1, hobby2] = hobbies;

console.log(hobby1, hobby2);
