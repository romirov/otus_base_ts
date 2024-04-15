# TypeScript

Установка

```
npm i typescript
```

Инициализация

```
npx tsc --init
```

## Настройка окружения для современной разработки на TS

### Prettier

Работает с TS из-коробки

### Eslint

Если запустить eslint в TS окружении, вроде ничего и не произойдет.

Потому что eslint по умолчанию проигнорирует ts файлы.

Для проверки TS-файлов

```
npx eslint . --ext .js,.ts
```

После этого eslint начнет проверять Typescript файлы, но будет падать с ошибками, если вы используете указания типов.

Решение - typescript-eslint

Некоторые правила нужно подправить, потому что они дублируют/конфликтуют с Typescript

```
{
  "import/no-unresolved": "off", // https://github.com/typescript-eslint/typescript-eslint/issues/1624
  "import/extensions": ["warn", "never"] // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
}
```
Добавить в .eslintrc.js
```
extends: [
    'plugin:@typescript-eslint/recommended',
  ],
```
Добавить в корень проекта .eslintignore, в который добавить webpack.config.js

### Проверка работы с типами

На соответствие типам проверяется не отдельный файл, а весь проект. Для этого нужно попытаться собрать проект - если это прошло успешно, значит проверки прошли.

```
npx tsc --noEmit
```

Эта проверка становится частью lint скрипта.

### Jest

Jest уже обрабатывает наши файлы с помощью babel.

Babel умеет обрабатывать и Typescript при помощи @babel/preset-typescript

```
npm install @babel/preset-typescript --save-dev
```

```
// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
+    '@babel/preset-typescript',
  ],
};
```

Webpack
Есть несколько вариантов интеграции

Первым делом нужно научить webpack смотреть на ts файлы, с помощью опции resolve.extensions

```
// webpack.config.js
module.exports = {
  // ...
  resolve: {
    extensions: [".js", ".ts"],
  },
};
```

Дальше нужно научить webpack обрабатывать эти файлы

Вариант 1: ts-loader (используется в проекте)

Описывается как в документации webpack так и в документации Typescript

Вариант 2: babel-loader. Упоминается в документации к Typescript и его настройка также описана в документации к webpack (только помните про расширение файла).
```
npm install -D babel-loader
```
В webpack.config.js добавляем секцию 
```
resolve: {
    extensions: ['.js', '.ts']
  },
```
и добавляем rules
```
module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:js|mjs|cjs|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
    ],
  },
```
добавляем
```
module.exports = {
  devtool: "inline-source-map",
}
```