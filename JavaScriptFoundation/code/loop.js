for (let i = 1; i <= 5; i++) {
    console.log(i);
}


let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
  console.log(number);
}

const person ={
  Name: "Kutu Mia",
  Age: 25
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}