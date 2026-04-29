const test = "Yasir";
console.log(`Hello ${test}`);

// DeStructuring -> breakdown the list

let [a, b] = [1, 2]

let grades = [72, 87, 68, 91]
let [john, micale, yasir, kutumia] = grades;

console.log(a)
console.log(kutumia)

// Object Destructuring -> name will set in name variable and age will set in age variable order dosen't mattter
const user = {name:"KutuMia", age:26}
const{name, age} = user;

// spread -> Expands arrays or objects into individual elements and rest operator -> collect multiple elements into an array or object(...)
//Spread
const nums = [1, 2, 3]
let new_nums = [0,...nums, 4, 5]
console.log(new_nums)

// Rest
function sum(...numbers){
  return numbers.reduce((a,b) => a+b, 0)
}

console.log(sum(1,2,3))

// call back Function -> define by me..called by another person

function greeting()
{
  console.log("Hello KutuMia");
}
let hellogreeting = greeting;
hellogreeting();

// summation
const numbers = [1, 2, 3, 4];
function sum(a, b) {
  return a + b;
}
const result = numbers.reduce(sum, 0);
console.log(result); // 10

// multiply
const numbers = [1, 2, 3, 4];
function multiply(a, b) {
  return a * b;
}
const result = numbers.reduce(multiply, 1);
console.log(result); // 24

// Concept of promisses -> representing the result of an asynchronous operation
const promise = new Promise((resolve, reject) => {
  const success = true
  if(success){
    resolve("Operation Succeeded")
  }
  else{
    reject("Operation Failed")
  }
});