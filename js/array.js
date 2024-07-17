const myTopThreeDinosaurs = ["Тираннозавр", "Велоцираптор", "Стегозавр"];

const dinosaurs = [
  "Тираннозавр",
  "Велоцираптор",
  "Стегозавр",
  "Трицератопс",
  "Брахиозавр",
  "Птеранодон",
  "Апатозавр",
  "Диплодок",
  "Компсогнат",
];

dinosaurs[3] = "Дино";
console.log(dinosaurs[3]);

for (let i = 0; i < dinosaurs.length; i++) {
  console.log(dinosaurs[i]);
}

dinosaurs.push("Тиранобульбазавро");
console.log(dinosaurs);

// push - добавить в конец массива
// pop - удалить с конца массива

dinosaurs.push("Тиранобульбазавро");
console.log(dinosaurs);

dinosaurs.unshift("Тиранобульбазавро");
console.log(dinosaurs);

dinosaurs.shift("Тиранобульбазавро");
console.log(dinosaurs);

// unshift - добавить в начало массива
// shift - удалить из в начала массива

// Для обьединения массивов используем команду - concat

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);

const colors = ["red", "green", "blue"];
console.log(colors.indexOf("red"));
console.log(colors.indexOf("green"));
console.log(colors.indexOf("blue"));

// ПРЕВРАЩАЕМ МАССИВ В СТРОКУ

const boringAnimation = ["Мартышка", "Кот", "Рыба", "Ящерица"];
console.log(boringAnimation.join(" "));
console.log(boringAnimation.join(","));
console.log(boringAnimation.join("-"));
console.log(boringAnimation.join("_"));

// Поиск дороги домой

const landmarks = [];
landmarks.push("мой дом");
landmarks.push("Дорожка к дому");
landmarks.push("Мигающий фонарь");
landmarks.push("Протекающий гилрант");
landmarks.push("Пожарная станция");
landmarks.push("Приют для кошек");
landmarks.push("Моя быышая школа");
landmarks.push("Дом подруги");

landmarks.pop("Дом подруги");
landmarks.pop("Моя быышая школа");
landmarks.pop("Приют для кошек");

console.log(landmarks);

// Случайный выбор

console.log(Math.floor(Math.random() * 5));

// const randomWords = ["Взрыв", "Пещера", "Принцесса", "Карандаш"];
// const randomIndex = Math.floor(Math.random() * 4);
// console.log(randomWords[randomIndex]);

const phrases = [
  "Звучит неплохо",
  "Да, это определенно надо сделать",
  "Не думаю, что это хорошая идея",
  "Может, не сегодня?",
  "Компьютер говорит нет",
];

const random = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
};

const randomBodyParts = ["глаз", "нос", "череп"];
const randomAdjectives = ["вонючая", "унылая", "дурацкая"];
const randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];

const rbp = random(randomBodyParts);
const rA = random(randomAdjectives);
const rW = random(randomWords);

console.log(rbp + " " + rA + " " + rW);
console.log([rbp, rA, rW].join(" "));
