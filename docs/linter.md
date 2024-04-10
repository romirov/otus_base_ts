# Поиск ошибок в коде

## Установка ESLint

```
npm i eslint -D
```

## Инициализация ESLint

```
npx eslint --init

You can also run this command directly using 'npm init @eslint/config'.
Need to install the following packages:
@eslint/create-config@0.4.6
Ok to proceed? (y) y
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · airbnb
✔ What format do you want your config file to be in? · JavaScript
Checking peerDependencies of eslint-config-airbnb-base@latest
The config that you've selected requires the following dependencies:

eslint-config-airbnb-base@latest eslint@^7.32.0 || ^8.2.0 eslint-plugin-import@^2.25.2
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · npm
```

## Для запуска и проверки

или

```
npx eslint file.js
```

или

```
npx eslint .
```

для проверки

```
npx eslint file.js --fix
```

## Добавление в package.json

В раздел scripts

```
"scripts": {
    "test": "jest",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  },
```

## Запуск проверки после добавления eslint в package.json

```
npm run lint
```

## Запуск фикса ошибок проверки после добавления eslint в package.json

```
npm run lint:fix
```

Добавление правила для комментариев .eslintrc.js в секцию rules

```
'max-len': ['error', { ignoreComments: true }],
```

Фикс prefer-default-export

```
'import/prefer-default-export': 'off'
```

## Плагин Jest для EsLint

Установка плагина для Jest

```
npm i eslint-plugin-jest -D
```

Добавление в .eslinrc.js в секцию plugins

```
plugins: ['jest'],
```

Добавление в .eslinrc.js в секцию env

```
'jest/globals': true,
```

## Плагин для валидации html eslint-plugin-html

Установка

```
install --save-dev eslint-plugin-html
```

Добавление плагина в .eslinrc.js

```
{
    "plugins": [
        "html"
    ]
}
```
