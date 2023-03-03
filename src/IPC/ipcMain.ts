import { ipcMain, dialog } from 'electron'

console.log(`[IPC]\tipcMain initialized`)

ipcMain.handle('fileDialog', async () => {
    const filePath = dialog.showOpenDialogSync({
        properties: ['openFile'],
        filters: [{ name: 'Video', extensions: ['mp4', 'mkv', 'mov', 'wmv'] }]
    })

    if (filePath === undefined) {
        return null
    }

    return (filePath)
})

require(`./SettingsIPC`)