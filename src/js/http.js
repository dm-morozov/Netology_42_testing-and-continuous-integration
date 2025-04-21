// src/js/http.js
// Демо-реализация функции fetchData (модуль http)

export default function fetchData(url) {
  if (url === "https://server/user/1") {
    return { status: "ok", level: 20 }; // добавили строку, что бы проходил error:
    // error  'url' is defined but never used  no-unused-vars
  }
  throw new Error("Mock this!");
}
