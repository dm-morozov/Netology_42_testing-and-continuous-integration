import "./css/style.css";
import getHealthStatus from "./js/health.js";
import sortHeroes from "./js/sortHeroes.js";

console.log("index worked");

// Вывод статуса здоровья
const character = { name: "Маг", health: 49 };
console.log(getHealthStatus(character));

// Сортировка героев
const heroes = [
  { name: "мечник", health: 10 },
  { name: "маг", health: 100 },
  { name: "лучник", health: 80 },
];
console.log(sortHeroes(heroes));
