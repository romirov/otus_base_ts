# Унификация стиля кода

## Установка Prettier

```
npm i prettier -D
```

## Создание файле конфигурации

```
touch .prettierrc.json
echo {} > .prettierrc.json
```

## Интеграция Prettier c ESLint

```
npm install --save-dev eslint-config-prettier
```

Добавление в .eslintrc.js в секцию extends

```
extends: [
    'airbnb-base',
    'prettier'
  ],
```

Добавление в package.json в секцию scripts

```
"scripts": {
    "test": "jest",
    "lint": "prettier --check . && eslint .",
    "lint:fix": "prettier --write . && eslint . --fix"
  },
```
