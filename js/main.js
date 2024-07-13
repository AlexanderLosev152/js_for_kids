const drawCats = (howManyTimes) => {
  for (let i = 0; i < howManyTimes; i++) {
    console.log(i + " =^.^= ");
  }
};

drawCats(10);
console.log("....");
drawCats(20);

let num1 = 12345;
let num2 = 6789;
let num3 = num1 + num2;
console.log(num3);

const guests = 15;
const newGuests = 15;
const quantityBalls = 2;

let balls = (guests + newGuests) * quantityBalls;
console.log(balls);

//  минуты

const secondsInAMinute = 60;
const minutesInAnHour = 60;
const secondsInAnHour = secondsInAMinute * minutesInAnHour;
console.log(secondsInAnHour);

const hoursInADay = 24;
const secondsInADay = secondsInAnHour * hoursInADay;
console.log(secondsInADay);

const daysInAYear = 365;
const secondsInAYear = secondsInADay * daysInAYear;
console.log(secondsInAYear);

const age = (age) => {
  console.log(age * secondsInAYear);
};

age(38);

// ----------------

let aaa = 10;
console.log((aaa -= 5));

// ----------------

const hello = "hello";
const world = "world";
console.log(hello + " " + world + " " + "!!!");
console.log(`${hello} ${world} !!!`);

console.log(hello.length);
console.log(world.length);

console.log(hello[0]);
console.log(hello[1]);
console.log(hello[2]);
console.log(hello[3]);
console.log(hello[4]);
// slice - получить часть строки
console.log(hello.slice(0));
// toUpperCase() - верхний регистр
console.log(hello[0].toUpperCase());
console.log(
  hello[0].toUpperCase() + hello.slice(1) + " " + world + " " + "!!!"
);
console.log(`${hello} ${world} !!!`);

let str = "эЙ, кАК деЛа?";
console.log(str[0].toUpperCase() + str.slice(1).toLowerCase());
