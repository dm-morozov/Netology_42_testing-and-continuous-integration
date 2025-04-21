# Индикатор здоровья 🩺

[Домашнее задание к лекции «Unit-тестирование»](./description_homework.md)

[![Статус сборки](https://ci.appveyor.com/api/projects/status/e6605ggww608a62w?svg=true)](https://ci.appveyor.com/project/dm-morozov/netology-42-testing-and-continuous-integration/)

# Netology: Юнит-тестирование

Этот репозиторий содержит решения для [домашнего задания Netology по юнит-тестированию](./description_homework.md). Проект объединяет три задачи («Чистые функции», «Matchers», «Mocking») в единую игровую систему, обеспечивая целостность, минимизацию дублирования кода и удобную конфигурацию. Все функции реализованы в модулях в папке `src/js`, с тестами, обеспечивающими **100% покрытие** кода. Проект настроен для разработки, тестирования и продакшена с использованием современных инструментов: Jest, ESLint, Husky, Webpack, Babel и AppVeyor.

## 🎯 Цели проекта

- Реализовать три задачи по юнит-тестированию, демонстрируя навыки написания чистых функций, тестирования с матчерами и мокирования.
- Настроить полноценный рабочий процесс разработки: линтинг, тесты, хуки, непрерывную интеграцию и сборку.
- Обеспечить кроссплатформенную совместимость (особенно для Windows) и единообразие кода.

## 📋 Задачи

### 1. Чистые функции (`src/js/health.js`)

- **Описание**: Реализована функция `getHealthStatus`, которая определяет статус здоровья игрового персонажа на основе его очков здоровья (`health`).
- **Логика**:
  - `health > 50` → `"healthy"`
  - `15 ≤ health ≤ 50` → `"wounded"`
  - `health < 15` → `"critical"`
  - Если персонаж некорректен (нет `name` или `health`), выбрасывается ошибка `"Invalid character"`.
- **Тесты**: `src/js/__tests__/health.test.js` использует `test.each` для проверки всех граничных значений и ошибок. Покрытие 100%.
- **Особенности**: Чистая функция без побочных эффектов, легко тестируемая.

### 2. Matchers (`src/js/sortHeroes.js`)

- **Описание**: Реализована функция `sortHeroes`, которая сортирует массив героев по убыванию здоровья (`health`) без изменения исходного массива.
- **Логика**:
  - Создаёт копию массива с помощью `[...heroes]`.
  - Сортирует копию с использованием `.sort((a, b) => b.health - a.health)`.
- **Тесты**: `src/js/__tests__/sortHeroes.test.js` использует матчеры Jest (`toEqual`, `toStrictEqual`) для проверки глубокого равенства. Покрытие 100%.
- **Особенности**: Устранён `console.log`, решены проблемы с окончаниями строк (`LF/CRLF`).

### 3. Mocking (`src/js/getLevel.js`, `src/js/http.js`)

- **Описание**: Реализована функция `getLevel`, которая запрашивает уровень пользователя через функцию `fetchData` (демо-реализация в `http.js`). Тесты мокируют `fetchData` для эмуляции HTTP-запросов.
- **Логика**:
  - `getLevel` асинхронная, использует `async/await`.
  - Вызывает `fetchData(`https://server/user/${userId}`)`.
  - Если ответ `{ status: "ok", level: N }`, возвращает `"Ваш текущий уровень: N"`.
  - При ошибке или `status !== "ok"` возвращает `"Информация об уровне временно недоступна"`.
- **Тесты**: `src/js/__tests__/getLevel.test.js` мокирует `fetchData` с помощью `jest.mock`. Проверяет успех, ошибку и некорректный статус. Покрытие 100%.
- **Особенности**: `http.js` исключён из покрытия тестов (`coveragePathIgnorePatterns`), так как мокается. Добавлена условная логика в `fetchData` для избежания ошибок линтинга.

## ✨ Особенности проекта

- **100% покрытие тестами** для всех функций (`health.js`, `sortHeroes.js`, `getLevel.js`) с использованием Jest.
- **ES-модули**: Используется `"type": "module"` в `package.json` для поддержки `import/export`.
- **Линтинг**: ESLint с Prettier обеспечивает чистоту кода, настроен для ES-модулей.
- **Husky**: Хук `pre-commit` запускает линтинг и тесты перед каждым коммитом, использует `sh` с отладочным выводом.
- **Непрерывная интеграция**: AppVeyor выполняет тесты и линтинг для каждого пуша.
- **Webpack и Babel**: Настроены для разработки (`npm run dev`) и продакшена (`npm run build`), поддерживают ES-модули и современные браузеры.
- **Кроссплатформенность**: Устранены проблемы с окончаниями строк (`LF/CRLF`) через `.gitattributes`, проект протестирован на Windows.
- **Стили**: Папка `src/css/` содержит `style.css` для оформления приложения.

## 🛠️ Настройки компонентов

### Jest

- **Файл**: `jest.config.js`

- **Конфигурация**:

  ```javascript
  export default {
    testEnvironment: "node",
    transform: {
      "^.+\\.js$": "babel-jest",
    },
    moduleFileExtensions: ["js", "mjs"],
    coveragePathIgnorePatterns: ["/node_modules/", "src/js/http.js"],
  };
  ```

- **Особенности**:

  - Использует `babel-jest` для трансформации ES-модулей.
  - Игнорирует `http.js` при подсчёте покрытия, так как он мокается.
  - Тесты запускаются через `npm test` с флагом `--coverage`.

### ESLint

- **Файл**: `eslint.config.mjs`
- **Конфигурация**:
  - Использует `eslint-config-airbnb-base` и `eslint-plugin-import`.
  - Поддерживает ES-модули и Prettier.
  - Настроен для игнорирования тестовых файлов при необходимости.
- **Скрипты**:
  - `npm run lint` — проверяет код.
  - `npm run lint:fix` — автоматически исправляет ошибки.
- **Особенности**:
  - В `http.js` добавлена условная логика (`if (url === "https://server/user/1")`) для избежания ошибок `no-unused-vars`.

### Husky

- **Папка**: `.husky/`

- **Файл**: `.husky/pre-commit`

- **Конфигурация**:

  ```bash
  echo "Running pre-commit hook"
  echo "Current directory: $(pwd)"
  
  npm run lint
  npm run test
  ```

- **Особенности**:

  - Использует `sh`-синтаксис с отладочным выводом.
  - Запускает линтинг и тесты перед каждым коммитом.
  - Протестирован на Windows, совместим с Git Bash.

### Webpack

- **Файлы**:
  - `webpack.config.mjs` — точка входа.
  - `webpack.common.mjs` — общие настройки.
  - `webpack.dev.mjs` — настройки для разработки.
  - `webpack.prod.mjs` — настройки для продакшена.
- **Конфигурация**:
  - Входная точка: `src/js/index.js`.
  - Выход: папка `dist/`.
  - Поддержка ES-модулей через Babel.
  - Включает обработку CSS через `style.css`.
  - Dev-сервер для разработки (`npm run dev`).
- **Скрипты**:
  - `npm run dev` — запускает сервер разработки (`http://localhost:8080`).
  - `npm run build` — создаёт продакшен-сборку.

### Babel

- **Файл**: `babel.config.json`

- **Конфигурация**:

  ```json
  {
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": "> 0.5%, last 2 versions, not dead",
          "useBuiltIns": "usage",
          "corejs": "3.22"
        }
      ]
    ]
  }
  ```

- **Особенности**:

  - Трансформирует ES-модули для Jest и Webpack.
  - Поддерживает современные браузеры (охват &gt; 0.5%, последние 2 версии).
  - Автоматически добавляет полифиллы через `corejs@3.22`.

### AppVeyor

- **Файл**: `.appveyor.yml`
- **Конфигурация**:
  - Устанавливает Node.js.
  - Выполняет `npm install`, `npm run lint`, `npm test`.
- **Особенности**:
  - Проверяет линтинг и тесты для каждого пуша.
  - Отображает статус сборки в `README.md` через бейдж.

### Git

- **Файл**: `.gitattributes`

- **Конфигурация**:

  ```plaintext
  * text=auto
  *.js text eol=lf
  *.json text eol=lf
  *.mjs text eol=lf
  *.html text eol=lf
  *.css text eol=lf
  *.sh text eol=lf
  .husky/* text eol=lf
  ```

- **Особенности**:

  - Гарантирует окончания строк `LF` для всех исходных файлов.
  - Устраняет предупреждения `LF/CRLF` на Windows.

## 📦 Установка и запуск

1. **Склонируйте репозиторий**:

   ```bash
   git clone https://github.com/dm-morozov/Netology_42_testing-and-continuous-integration.git
   ```

2. **Перейдите в папку проекта**:

   ```bash
   cd Netology_42_testing-and-continuous-integration
   ```

3. **Установите зависимости**:

   ```bash
   npm install
   ```

4. **Инициализируйте Husky** (если нужно):

   ```bash
   npm run prepare
   ```

5. **Запустите тесты**:

   ```bash
   npm test
   ```

6. **Запустите линтинг**:

   ```bash
   npm run lint
   ```

7. **Запустите сервер разработки**:

   ```bash
   npm run dev
   ```

8. **Соберите проект для продакшена**:

   ```bash
   npm run build
   ```

## 📂 Структура проекта

```
Netology_42_testing-and-continuous-integration/
├── src/
│   ├── js/
│   │   ├── health.js          # Чистая функция getHealthStatus
│   │   ├── sortHeroes.js      # Функция сортировки героев
│   │   ├── http.js            # Демо-функция fetchData
│   │   ├── getLevel.js        # Функция получения уровня пользователя
│   │   ├── __tests__/
│   │   │   ├── health.test.js # Тесты для getHealthStatus
│   │   │   ├── sortHeroes.test.js # Тесты для sortHeroes
│   │   │   ├── getLevel.test.js # Тесты для getLevel с мокированием
│   │   ├── index.js           # Точка входа для Webpack
│   ├── css/
│   │   ├── style.css          # Стили для приложения
│   ├── index.html             # HTML-страница для Webpack
├── .husky/                    # Хук pre-commit для Husky
├── coverage/                  # Отчёты покрытия тестами
├── dist/                      # Собранные файлы Webpack
├── node_modules/              # Зависимости проекта
├── .appveyor.yml              # Конфигурация AppVeyor
├── .gitattributes             # Настройка окончаний строк
├── .gitignore                 # Игнорируемые файлы
├── babel.config.json          # Конфигурация Babel
├── eslint.config.mjs          # Конфигурация ESLint
├── jest.config.js             # Конфигурация Jest
├── package.json               # Описание проекта и скрипты
├── package-lock.json          # Фиксация версий зависимостей
├── README.md                  # Этот файл
├── webpack.common.mjs         # Общая конфигурация Webpack
├── webpack.dev.mjs            # Конфигурация Webpack для разработки
├── webpack.prod.mjs           # Конфигурация Webpack для продакшена
├── webpack.config.mjs         # Точка входа Webpack
```

## 📜 Лицензия

Проект распространяется под лицензией **ISC**.

## 👤 Автор

Создано dm-morozov для домашнего задания Netology по курсу «Юнит-тестирование».