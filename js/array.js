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
