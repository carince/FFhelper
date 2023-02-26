import { ipcMain, dialog } from 'electron'

ipcMain.handle('fileDialog', async() => {
    const filePath = dialog.showOpenDialogSync({ 
        properties: ['openFile'], 
        filters: [{name: 'Video', extensions: ['mp4', 'mkv', 'mov', 'wmv']}]
    })

    if (filePath === undefined) {
        return(`No file was selected!`)
    }

    return(filePath)
})

console.log(`[IPC]\tipcMain initialized`)