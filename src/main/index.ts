import { app, BrowserWindow } from 'electron'
import path from 'path'

function distPath(filename: string) {
	return path.join(app.getAppPath(), 'dist', filename)
}

function createWindow() {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		show: false,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: true,
			preload: distPath('preload/index.js')
		}
	})
	return win
}

app.whenReady().then(() => {
	const win = createWindow()
	if(app.isPackaged) {
		win.loadFile(distPath('public/template.html'))
	} else {
		win.loadURL('http://localhost:8497')
	}

	win.webContents.on('dom-ready', () => {
		win.show()
		if(!app.isPackaged) {
			win.webContents.openDevTools({mode: 'detach'})
		}
	})
})
