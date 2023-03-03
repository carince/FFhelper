import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'path'

app.on("ready", async (): Promise<void> => {
    let window: BrowserWindow | null;

    window = new BrowserWindow({
        autoHideMenuBar: true,
        show: false,
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    window.loadURL("http://localhost:3000");

    window.once("ready-to-show", (): void => {
        require('./IPC/ipcMain')
        window?.show();
        window?.webContents.openDevTools();
        console.log("[App]\tWindow loaded");
    });

    window.on("closed", (): void => {
        window = null;
    });
})