// src/js/__tests__/getLevel.test.js

import getLevel from "../getLevel.js";
import fetchData from "../http.js";

// Мокаем модуль http.js
jest.mock("../http.js");

describe("getLevel", () => {
  it("возвращает информацию об уровне", () => {
    fetchData.mockReturnValue({ status: "ok", level: 20 }); // Мокаем возвращаемое значение функции fetchData

    const result = getLevel(1); // Вызываем функцию getLevel
    expect(result).toBe("Ваш текущий уровень: 20");
  });

  it("возвращает информацию об уровне", () => {
    fetchData.mockReturnValue({ status: "error" }); // Мокаем возвращаемое значение функции fetchData

    const result = getLevel(1); // Вызываем функцию getLevel
    expect(result).toBe("Информация об уровне временно недоступна");
  });
});
