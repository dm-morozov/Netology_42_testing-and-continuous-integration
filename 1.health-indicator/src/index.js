import "./css/style.css";
import getHealthStatus from "./js/health.js";

console.log("index worked");

// Вывод статуса здоровья
const character = { name: "Маг", health: 49 };
console.log(getHealthStatus(character));
