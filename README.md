# Учебный проект

Для локального запуска проекта:

```
npm run i
npm run start
```

Приложение также развернуто на [vercel](https://innotech-project-git-stage-2-kdolgonosov.vercel.app?_vercel_share=DdGWmBM4I0SOjqga5jcFftobJacyCOtT) (деплой новой ветки)

Storybook проекта:

```
npm run storybook
```

## Из дополнительных требований проекта:

### Первый этап:

-   Pixel perfect
-   Поддержана базовая адаптивность, верстка не ломается на всем диапазоне разрешений
-   Реализованы анимации указанные в макете
-   Подключен и наполнен Storybook
-   Семантическая верстка
-   Оптимизирована загрузка шрифтов
-   Применяется Feature Sliced Design

### Второй этап:

-   Исправлена ошибка в Storybook, для поддержки локальной работы на macOS
-   Реализован плавный скролл при клике на элементы навигации в header и footer
-   Интегрирована галерея на странице товара
-   Применен debounce на странице поиска товара
-   Поддержаны все сценарии взаимодействия с поисковой строкой (поиск по окончанию ввода с debounce, по нажатию Enter, по нажатию кнопки). Ни в одном из кейсов запросы к API не дублируются
