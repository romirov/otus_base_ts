# Тестирование

## Установка jest

```
npm install jest @types/jest -D
```

## Инициализация

```
npx jest --init

The following questions will help Jest to create a suitable configuration for your project

✔ Would you like to use Jest when running "test" script in "package.json"? … yes
✔ Would you like to use Typescript for the configuration file? … no
✔ Choose the test environment that will be used for testing › jsdom (browser-like)
✔ Do you want Jest to add coverage reports? … no
✔ Which provider should be used to instrument code for coverage? › v8
✔ Automatically clear mock calls, instances, contexts and results before every test? … yes

✏️  Modified /home/hanza/Projects/Otus/otus_base_js/package.json

📝  Configuration file created at /home/hanza/Projects/Otus/otus_base_js/jest.config.js
```

## Добавление скрипта в package.json(происходит автоматически после предыдущей команды)

```
"scripts": {
    "test": "jest"
}
```

## Установка jest-environment-jsdom

```
npm i jest-environment-jsdom -D
```

## Установка Babel

```
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

## Создание Babel config

```
touch babel.config.js
```

## Добавление в babel.config.js

```
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};

```

## Запуск теста

```
npm test
```

или запуск бинарника, который запустит тесты

```
npx jest
```
