# Домашнее задание к лекции «Unit-тестирование»

[![Статус сборки](https://ci.appveyor.com/api/projects/status/e6605ggww608a62w?svg=true)](https://ci.appveyor.com/project/dm-morozov/netology-42-testing-and-continuous-integration/)

```
version: 1.0.{build}
image: Ubuntu2004
install:
  - sudo curl -fsSL https://deb.nodesource.com/setup_18.x | sudo bash -
  - sudo apt-get update
  - sudo apt-get install -y nodejs
  - cd 1.health-indicator && npm install
  - cd ../2.matchers && npm install
  - cd ../3.mocking && npm install
build: off
test_script:
  - cd 1.health-indicator && npm run lint && npm test
  - cd ../2.matchers && npm run lint && npm test
  - cd ../3.mocking && npm run lint && npm test
```