const myarray =["a", "b", "c"]
console.log(myarray)
console.log(myarray[2]) // Accessing the element at index 2, which is "c"

myarray.push("d") // Adding "d" to the end of the array
console.log(myarray)

myarray.pop() // Removing the last element of the array, which is "d"
console.log(myarray)

// (function()
// {
//   console.log("Anonymous function executed immediately!");
// })();

const ghorardim3 = () => {
  console.log("Arrow function executed!");
}
ghorardim3()

const names = ["Alice", "Bob", "Charlie"]

function add_lej(name)
{
  return name + "___";
}
const names_mod = names.map(add_lej)
console.log(names_mod)

const person ={
  Name: "Kutu Mia",
  Age: 25
};
console.log(person.Name) // Accessing the Name property of the person object