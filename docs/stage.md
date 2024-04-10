# Фильтрация кода перед git commit

## Установка lint-staged

```
npx mrm lint-staged
```

После установки нужно проверить секцию husky и lint-staged в package.json и из секции lint-staged удалить `--cache` и `md`
