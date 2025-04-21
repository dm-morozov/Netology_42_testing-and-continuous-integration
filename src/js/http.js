// src/js/http.js
// Демо-реализация функции fetchData (модуль http)

export default function fetchData(url) {
  if (url === "https://server/user/1") {
    return { status: "ok", level: 20 };
  }
  throw new Error("Mock this!");
}
