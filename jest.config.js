// jest.config.js

export default {
  testEnvironment: "node",
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  moduleFileExtensions: ["js", "mjs"],
  coveragePathIgnorePatterns: ["/node_modules/", "src/js/http.js"], // Игнорируем http, так как мокаем
};
