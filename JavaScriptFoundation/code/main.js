console.log("Hello, World!") // Printing "Hello, World!" to the console

// let x = 10
// console.log("The value of x is: " + x)

// Number	- A number representing a numeric value
// Bigint	- A number representing a large integer
// String	- A text of characters enclosed in quotes
// Boolean	- A data type representing true or false
// Undefined	- A variable with no assigned value
// Null	- A value representing object absence
// Symbol	- A unique primitive identifier
// Object	- A collection of key-value pairs of data

let x = 10
let y = 20000000000000000000000000000000000000000000 // BigInt can handle very large integers
let name = "John Doe" // String
let isStudent = true // Boolean

console.log("The value of y is: " + y)
console.log("The value of name is: " + name)
console.log("The value of isStudent is: " + isStudent)

// Decaring a variable
let p = 10 // Using let allows us to reassign the value of p
p = 15 // Reassigning the value of p to 15
console.log("The value of p is: " + p)

var q = 20 // Using var also allows us to reassign the value of q
var q = 25 // Reassigning the value of q to 25
console.log("The value of q is: " + q)

const r = 30 // Using const means we cannot reassign the value of r
// r = 35 // This will throw an error because we cannot reassign a const variable
console.log("The value of r is: " + r)

let a = null // a is assigned null, which represents the absence of any object value
console.log("The value of a is: " + a)

let b; // b is declared but not assigned a value, so it is undefined
console.log("The value of b is: " + b)

