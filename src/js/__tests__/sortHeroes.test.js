import sortHeroes from "../sortHeroes";

describe("sortHeroes", () => {
  test("должен сортировать героев по здоровью по убыванию", () => {
    const input = [
      { name: "мечник", health: 10 },
      { name: "маг", health: 100 },
      { name: "лучник", health: 80 },
    ];
    const expected = [
      { name: "маг", health: 100 },
      { name: "лучник", health: 80 },
      { name: "мечник", health: 10 },
    ];

    expect(sortHeroes(input)).toEqual(expected); // вызывает Object.is сравнение примитивных значений
    // что даже лучше для тестирования, чем === оператор строгого равенства.
    expect(sortHeroes(input)).not.toBe(input); // Проверка: вернулся новый массив, что мы не мутировали старый
  });
});

test("должен корректно обрабатывать пустой массив", () => {
  expect(sortHeroes([])).toEqual([]);
});

test("должен корректно обрабатывать одного героя", () => {
  // Важно: всё равно должна быть новая копия массива (not.toBe(input))
  const input = [{ name: "маг", health: 100 }];
  expect(sortHeroes(input)).toEqual(input);
  expect(sortHeroes(input)).not.toBe(input); // Снова проверка на "новый массив"
});
