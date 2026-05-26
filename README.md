# Antenna Monitor — Desktop App (Electron)

## Що це?
Десктопний .exe додаток, що відкриває Antenna Monitor у нативному вікні Windows.

## Структура файлів
```
antenna-monitor-electron/
├── main.js          ← головний файл Electron
├── error.html       ← сторінка якщо сервер недоступний
├── icon.ico         ← іконка додатку (додати самостійно!)
├── package.json     ← конфігурація проекту і збірки
└── README.md
```

## Кроки для збірки .exe

### 1. Встановити Node.js
Завантажити з https://nodejs.org (версія LTS)

### 2. Розпакувати цю папку і відкрити термінал в ній

```bash
cd antenna-monitor-electron
```

### 3. Встановити залежності

```bash
npm install
```

### 4. Перевірити що все працює (опційно)

```bash
npm start
```

### 5. Зібрати .exe

```bash
npm run build
```

Результат буде в папці `dist/`:
- `Antenna Monitor Setup 1.0.0.exe` — інсталятор
- `Antenna Monitor 1.0.0.exe` — portable (без установки)

## Додати іконку (опційно)
Покладіть файл `icon.ico` (256x256 px) поруч з main.js.
Якщо іконки немає — electron-builder використає стандартну.

## Зміна URL
Якщо адреса сайту зміниться — відредагуйте рядок в `main.js`:
```js
const APP_URL = 'http://s1182065.ha006.t.mydomain.zone/antenna-monitor/index.html'
```
