# Индикатор здоровья 🩺

[Домашнее задание к лекции «Unit-тестирование»](./description_homework.md)

[![Статус сборки](https://ci.appveyor.com/api/projects/status/e6605ggww608a62w?svg=true)](https://ci.appveyor.com/project/dm-morozov/netology-42-testing-and-continuous-integration/)

Этот проект является решением первой задачи **"Чистые функции"** из [домашнего задания Netology по юнит-тестированию](./description_homework.md). Он реализует чистую функцию для определения статуса здоровья игровых персонажей на основе их очков здоровья.

## 📖 Описание

Проект `1.health-indicator` содержит чистую функцию `getHealthStatus`, которая оценивает здоровье персонажа и возвращает один из трёх статусов:

- **healthy** (здоров, здоровье &gt; 50)
- **wounded** (ранен, 15 ≤ здоровье ≤ 50)
- **critical** (критическое, здоровье &lt; 15)

Проект включает:

- Юнит-тесты с 100% покрытием с использованием **Jest**.
- Линтинг с **ESLint** и **Prettier** для обеспечения качества кода.
- Непрерывную интеграцию с **AppVeyor** для автоматического тестирования.
- **Husky** для запуска линтинга и тестов перед коммитами.
- Настройку **Babel** для поддержки современных возможностей JavaScript и обеспечения совместимости.
- Настройку **Webpack** для сборки проекта, включая поддержку разработки и продакшена.
- Использование `"type": "module"` в `package.json` для работы с ES-модулями, как требуется в задании.

Настройка **Babel** и **Webpack** заняла значительное время, чтобы обеспечить корректную работу модулей, минификацию и совместимость с различными окружениями.

## 🛠️ Установка

### Требования

- **Node.js** (версия 18.x или выше)
- **npm** (версия 8.x или выше)

### Установка

1. Склонируйте репозиторий:

   ```bash
   git clone https://github.com/dm-morozov/Netology_42_testing-and-continuous-integration.git
   ```
2. Перейдите в папку проекта:

   ```bash
   cd Netology_42_testing-and-continuous-integration/1.health-indicator
   ```
3. Установите зависимости:

   ```bash
   npm install
   ```

### Скрипты

- Запуск тестов с покрытием:

  ```bash
  npm test
  ```
- Запуск линтинга:

  ```bash
  npm run lint
  ```
- Исправление проблем линтинга:

  ```bash
  npm run lint:fix
  ```
- Запуск сервера для разработки:

  ```bash
  npm run dev
  ```
- Сборка для продакшена:

  ```bash
  npm run build
  ```

## 🧪 Тестирование

Проект использует **Jest** для юнит-тестирования. Тесты находятся в `src/js/__tests__/health.test.js` и покрывают все случаи:

- Здоровье &gt; 50 → `healthy`
- 15 ≤ Здоровье ≤ 50 → `wounded`
- Здоровье &lt; 15 → `critical`
- Некорректный ввод → выбрасывает ошибку

Запустите тесты:

```bash
npm test
```

Ожидаемый вывод:

```
PASS  src/js/__tests__/health.test.js
✓ getHealthStatus для Маг (здоровье 90) должен вернуть healthy
✓ getHealthStatus для Маг (здоровье 51) должен вернуть healthy
✓ getHealthStatus для Маг (здоровье 50) должен вернуть wounded
✓ getHealthStatus для Маг (здоровье 49) должен вернуть wounded
✓ getHealthStatus для Маг (здоровье 15) должен вернуть wounded
✓ getHealthStatus для Маг (здоровье 14) должен вернуть critical
✓ getHealthStatus для Маг (здоровье 0) должен вернуть critical
✓ выбрасывает ошибку для некорректного персонажа
```

Покрытие: **100%** (операторы, ветки, функции, строки).

## 🔍 Линтинг

Проект использует **ESLint** с **Prettier** для обеспечения единообразия стиля кода. Запустите:

```bash
npm run lint
```

Для автоматического исправления проблем:

```bash
npm run lint:fix
```

## 🚀 Непрерывная интеграция

Проект интегрирован с **AppVeyor** для непрерывной интеграции. Каждый пуш запускает:

- Установку Node.js и зависимостей.
- Линтинг (`npm run lint`).
- Тестирование (`npm test`).

Проверьте статус сборки:

## 🐶 Husky

**Husky** настроен для запуска линтинга и тестов перед каждым коммитом. Хук `pre-commit` выполняет:

```bash
npm run lint && npm test
```

Для настройки Husky:

```bash
set HUSKY_GIT_PARAMS=%CD%\..\.git
npx husky init
echo "npm run lint && npm test" > .husky/pre-commit
```

## 🛠️ Настройка Babel и Webpack

- **Babel**: Используется для трансформации современного JavaScript-кода (ES6+) в совместимый с большинством окружений. Конфигурация находится в `babel.config.json` и включает пресет `@babel/preset-env` для поддержки ES-модулей и полифиллов через `core-js`.
- **Webpack**: Настроен для сборки проекта, включая:
  - **Режим разработки** (`npm run dev`) с горячим перезапуском через `webpack-dev-server`.
  - **Режим продакшена** (`npm run build`) с минификацией и оптимизацией.
  - Поддержку CSS через `css-loader` и `mini-css-extract-plugin`.
  - Генерацию HTML через `html-webpack-plugin`.

Проект использует `"type": "module"` в `package.json`, что обеспечивает поддержку ES-модулей, как указано в требованиях задания.

## 📂 Структура проекта

```
1.health-indicator/
├── src/
│   ├── js/
│   │   ├── health.js          # Чистая функция getHealthStatus
│   │   ├── __tests__/
│   │   │   ├── health.test.js # Юнит-тесты
│   ├── css/
│   ├── index.html
├── .husky/                    # Хук pre-commit для Husky
├── node_modules/
├── package.json
├── babel.config.json          # Конфигурация Babel
├── eslint.config.mjs          # Конфигурация ESLint
├── jest.config.js             # Конфигурация Jest
├── .prettierrc                # Конфигурация Prettier
├── webpack.common.mjs         # Общая конфигурация Webpack
├── webpack.dev.mjs            # Конфигурация Webpack для разработки
├── webpack.prod.mjs           # Конфигурация Webpack для продакшена
├── webpack.config.mjs         # Точка входа Webpack
├── README.md                  # Этот файл
```

## 📜 Лицензия

Проект распространяется под лицензией ISC.

## 🙌 Автор

Создано dm-morozov для домашнего задания Netology по юнит-тестированию.