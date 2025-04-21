import getHealthStatus from "../health.js";

// Тесты
test.each([
  { input: { name: "Маг", health: 90 }, expected: "healthy" },
  { input: { name: "Маг", health: 51 }, expected: "healthy" },
  { input: { name: "Маг", health: 50 }, expected: "wounded" },
  { input: { name: "Маг", health: 49 }, expected: "wounded" },
  { input: { name: "Маг", health: 15 }, expected: "wounded" },
  { input: { name: "Маг", health: 14 }, expected: "critical" },
  { input: { name: "Маг", health: 0 }, expected: "critical" },
])(
  `getHealthStatus for $input.name (health $input.health) should return $expected`,
  ({ input, expected }) => {
    expect(getHealthStatus(input)).toBe(expected);
  },
);

test("throws error for invalid character", () => {
  expect(() => getHealthStatus({})).toThrow("Invalid character");
  expect(() => getHealthStatus(null)).toThrow("Invalid character");
});
