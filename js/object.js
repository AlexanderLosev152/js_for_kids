// const cat = {
//   legs: 3,
//   name: "Гармония",
//   color: "Черепаховый",
// };

// console.log(cat.name);
// console.log(Object.keys(cat));

const cat = {};
cat.name = "Гармония";
cat.legs = 3;
cat.color = "Черепаховый";

console.log(cat);

const dinosaurs = [
  { name: "Тираннозавр рекс", period: "Верхнемеловой" },
  { name: "Стегозавр", period: "Верхнеюрский" },
  { name: "Платеозавр", period: "Триасовый" },
];

console.log(dinosaurs[0].name);

const anna = { name: "Анна", age: 11, luckyNumbers: [2, 4, 8, 16] };
const dave = { name: "Дэйв", age: 5, luckyNumbers: [3, 9, 40] };
const kate = { name: "Кейт", age: 9, luckyNumbers: [1, 2, 3] };

const friends = [anna, dave, kate];

console.log(friends[1]);

const movies = {
  "В поисках Немо": {
    releaseDate: 2003,
    duration: 100,
    actors: ["Альберт Брукс", "Эллен Дедженерес", "Александр Гоулд"],
    format: "DVD",
  },
  "Звездные войны: Эпизод VI — Возвращение джедая": {
    releaseDate: 1983,
    duration: 134,
    actors: ["Марк Хэмилл", "Харрисон Форд", "Кэрри Фишер"],
    format: "DVD",
  },
  "Гарри Поттер и Кубок огня": {
    releaseDate: 2005,
    duration: 157,
    actors: ["Дэниел Рэдклифф", "Эмма Уотсон", "Руперт Гринт"],
    format: "Blu-ray",
  },
};

const mov = movies["В поисках Немо"];

console.log(mov.actors);
console.log(mov.format);

const scores = {
  dima: 10,
  oleg: 15,
  alex: 40,
};

scores.dima += 10;
console.log(scores.dima);

const myCrazyObject = {
  name: "Нелепый объект",
  "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
  "random animal": "Банановая акула",
};

console.log(myCrazyObject["some array"].number);
