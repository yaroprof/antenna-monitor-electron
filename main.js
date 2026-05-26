const { app, BrowserWindow, Menu, shell } = require('electron')
const path = require('path')

const APP_URL = 'http://s1182065.ha006.t.mydomain.zone/antenna-monitor/index.html'

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 900,
    minHeight: 600,
    title: 'Antenna Monitor',
    icon: path.join(__dirname, 'icon.ico'),
    backgroundColor: '#0f1117',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: true,
    },
    titleBarStyle: 'default',
    show: false, // приховати до завантаження
  })

  // Прибрати стандартне меню
  Menu.setApplicationMenu(null)

  // Завантажити сайт
  win.loadURL(APP_URL)

  // Показати вікно коли завантажиться
  win.once('ready-to-show', () => {
    win.show()
    win.focus()
  })

  // Відкривати зовнішні посилання в браузері, а не в Electron
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url)
    return { action: 'deny' }
  })

  // Якщо сайт недоступний — показати сторінку помилки
  win.webContents.on('did-fail-load', (event, errorCode, errorDescription) => {
    win.loadFile(path.join(__dirname, 'error.html'))
  })
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
