// // const kidnapped = document.getElementsByTagName("h1"); // HTMLCollection(1) [h1]
// // console.log(kidnapped)
// // console.log(kidnapped[0]) // Accessing the first (and only) h1 element in the collection
// // kidnapped[0].remove()

// const kidnapped = document.getElementById("myParagraph")
// console.log(kidnapped) // Accessing the element with the ID "myParagraph"
// kidnapped.innerHTML = "This paragraph has been modified!" // Changing the content of the paragraph element

function changeBG()
{
  const  mypara = document.getElementById("myParagraph")
  mypara.style.backgroundColor = "yellow" // Changing the background color of the paragraph element to yellow
}

const mybutton = document.getElementById("myButton")
//mybutton.addEventListener("click", changeBG) // Adding a click event listener to the button that calls the changeBG function when clicked
mybutton.addEventListener("mouseover", changeBG)