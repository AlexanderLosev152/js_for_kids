// const name = "Alexander";
// console.log("Hello, " + name);
// name.length > 6 ? console.log("Name is long") : console.log("Name is small");

// let sheepCounted = 0;
// while (sheepCounted < 10) {
//   console.log(sheepCounted);
//   sheepCounted++;
// }

console.log("end");

for (let i = 3; i <= 1000; i *= 3) {
  console.log(i);
}

let x = 3;
while (x <= 1000) {
  console.log(x);
  x *= 3;
}

const animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
for (let i = 0; i < animals.length; i++) {
  console.log(`${animals[i]} - прекрастное животное`);
}

let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let randomStr = " ";
let count = 1;
while (count < 6) {
  randomStr += alphabet[Math.floor(Math.random() * alphabet.length)];
  console.log(randomStr);
  count++;
}
