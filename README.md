# Custom MkDocs Documentation Site

> **GitHub Pages**: [dobrunia.github.io/mkdocs](https://dobrunia.github.io/mkdocs/)  
> **Repository**: [github.com/Dobrunia/mkdocs](https://github.com/Dobrunia/mkdocs)

## 📋 Отчет о выполнении задания 2.2

### ✅ Выполненные задачи

#### 1. Создание кастомной темы

- **HTML шаблоны**: Создана полная структура темы с `base.html` и `main.html`
- **CSS стили**: Разработаны современные стили с использованием CSS Grid, Flexbox, CSS Custom Properties
- **JavaScript**: Добавлена интерактивность (smooth scrolling, code highlighting, mobile menu, search)
- **Responsive дизайн**: Адаптивная верстка для всех устройств

#### 2. Настройка пайплайна сборки

- **PostCSS**: Настроена обработка CSS с автопрефиксерами, минификацией и современными CSS фичами
- **HTML валидация**: Добавлена валидация HTML с помощью html-validate
- **JavaScript минификация**: Настроена минификация JS с помощью Terser
- **GitHub Actions**: Создан двухэтапный пайплайн (тестирование + деплой)

#### 3. Кастомизация контента

- **Метаданные**: Добавлены title, description, author, canonical URL
- **Навигация**: Структурированная навигация с разделами
- **Контент**: Созданы страницы с примерами, API документацией, руководством

#### 4. Деплой на GitHub Pages

- **Автоматический деплой**: При пуше в main ветку
- **Оптимизация**: Минификация CSS/JS, валидация HTML
- **CI/CD**: Двухэтапный процесс с тестированием

### 🛠 Технологический стек

#### Frontend

- **HTML5**: Семантическая разметка с метаданными
- **CSS3**: Современные стили с CSS Grid, Flexbox, Custom Properties
- **JavaScript ES6+**: Модульная архитектура с современными фичами
- **PostCSS**: Обработка CSS с автопрефиксерами и минификацией

#### Backend & Tools

- **MkDocs**: Генератор статических сайтов
- **Python**: Обработка Markdown и шаблонизация
- **Node.js**: Инструменты сборки (PostCSS, Terser, html-validate)
- **GitHub Actions**: CI/CD пайплайн

### 📁 Структура проекта

```
mkdocs/
├── .github/workflows/          # GitHub Actions workflows
│   └── deploy.yml            # Пайплайн сборки и деплоя
├── assets/                   # Статические ресурсы
│   ├── css/
│   │   ├── main.css         # Основные стили
│   │   ├── main.min.css    # Минифицированные стили
│   │   └── custom.css      # Дополнительные стили
│   └── js/
│       ├── main.js         # Основной JavaScript
│       └── main.min.js    # Минифицированный JavaScript
├── docs/                     # Контент документации
│   ├── index.md            # Главная страница
│   ├── getting-started.md  # Руководство по началу работы
│   ├── api-reference.md    # API документация
│   └── examples.md         # Примеры использования
├── mkdocs_theme/            # Кастомная тема
│   └── custom_theme/
│       ├── __init__.py     # Инициализация темы
│       ├── base.html       # Базовый шаблон
│       └── main.html       # Шаблон страницы
├── .htmlvalidate.json      # Конфигурация валидации HTML
├── postcss.config.js       # Конфигурация PostCSS
├── package.json           # Node.js зависимости
├── mkdocs.yml            # Конфигурация MkDocs
└── README.md             # Документация проекта
```

### 🔧 Конфигурация пайплайна

#### GitHub Actions Workflow (`.github/workflows/deploy.yml`)

```yaml
name: Deploy MkDocs to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: write

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.x'
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      - name: Install Python dependencies
        run: |
          python -m pip install --upgrade pip
          pip install mkdocs mkdocs-material pymdown-extensions
      - name: Install Node.js dependencies
        run: npm ci
      - name: Process CSS with PostCSS
        run: npm run build:css
      - name: Minify JavaScript
        run: npm run build:js
      - name: Build MkDocs site
        run: mkdocs build --strict
      - name: Validate HTML
        run: npm run validate:html

  build-deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      # ... аналогичные шаги для деплоя
      - name: Publish to gh-pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./site
          publish_branch: gh-pages
```

#### PostCSS конфигурация

```javascript
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-custom-properties'),
    require('postcss-preset-env')({
      stage: 2,
      features: {
        'nesting-rules': true,
        'custom-properties': true,
        'color-mod-function': true,
        'custom-media-queries': true,
        'media-queries-aspect-ratio': true,
        'logical-properties-and-values': true,
      },
    }),
    require('autoprefixer'),
    require('cssnano')({
      preset: [
        'default',
        {
          discardComments: { removeAll: true },
          normalizeWhitespace: true,
          minifySelectors: true,
          minifyParams: true,
          mergeLonghand: true,
          mergeRules: true,
          minifyFontValues: true,
          minifyGradients: true,
          minifyTimingFunctions: true,
          minifyColorValues: true,
          convertValues: true,
          discardDuplicates: true,
          discardEmpty: true,
          discardOverridden: true,
          discardUnused: true,
          mergeIdents: true,
          mergeAtRules: true,
          normalizeDisplayValues: true,
          normalizePositions: true,
          normalizeRepeatStyle: true,
          normalizeString: true,
          normalizeUnicode: true,
          normalizeUrl: true,
          orderedValues: true,
          reduceIdents: true,
          reduceInitial: true,
          reduceTransforms: true,
          uniqueSelectors: true,
          zindex: false,
        },
      ],
    }),
  ],
};
```

### 🎨 Особенности кастомной темы

#### HTML структура

- Семантическая разметка с правильными HTML5 тегами
- Метаданные для SEO (title, description, author, canonical URL)
- Accessibility атрибуты для улучшения доступности

#### CSS стили

- **CSS Custom Properties**: Для легкой кастомизации цветов и размеров
- **CSS Grid & Flexbox**: Современная верстка
- **Responsive дизайн**: Адаптивность для всех устройств
- **Анимации**: Плавные переходы и hover эффекты
- **Typography**: Улучшенная типографика с правильными отступами

#### JavaScript функциональность

- **Smooth scrolling**: Плавная прокрутка к якорям
- **Code highlighting**: Подсветка синтаксиса с кнопкой копирования
- **Mobile menu**: Адаптивное меню для мобильных устройств
- **Search**: Базовая поисковая функциональность
- **Performance**: Оптимизация с debouncing и event delegation

### 📊 Этапы сборки

1. **Установка зависимостей**

   - Python: MkDocs, pymdown-extensions
   - Node.js: PostCSS, Terser, html-validate

2. **Обработка CSS**

   - PostCSS с автопрефиксерами
   - Минификация с cssnano
   - Современные CSS фичи

3. **Обработка JavaScript**

   - Минификация с Terser
   - Оптимизация производительности

4. **Сборка MkDocs**

   - Генерация статических файлов
   - Обработка Markdown в HTML

5. **Валидация HTML**

   - Проверка корректности разметки
   - Accessibility проверки

6. **Деплой**
   - Публикация в gh-pages ветку
   - Автоматическое обновление GitHub Pages

### 🚀 Результат

- ✅ **Кастомная тема**: Полностью функциональная тема с HTML/CSS/JS
- ✅ **PostCSS обработка**: Современные CSS фичи и оптимизация
- ✅ **HTML валидация**: Проверка корректности разметки
- ✅ **Минификация**: Оптимизация CSS и JavaScript
- ✅ **GitHub Actions**: Автоматический CI/CD пайплайн
- ✅ **GitHub Pages**: Автоматический деплой
- ✅ **Responsive дизайн**: Адаптивность для всех устройств
- ✅ **SEO оптимизация**: Правильные метаданные и структура

### 🔗 Ссылки

- **Сайт**: https://dobrunia.github.io/mkdocs/
- **Репозиторий**: https://github.com/Dobrunia/mkdocs
- **GitHub Actions**: https://github.com/Dobrunia/mkdocs/actions
