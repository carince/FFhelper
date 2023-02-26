import { ipcMain, dialog } from 'electron'
import process from 'child_process'
import os from 'os'

console.log(`[IPC]\tipcMain initialized`)

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

ipcMain.on("run", (settings: any): void => {
    // process.execSync(`ffmpeg -y -v quiet -stats -i "${filePath}" -ss ${trimStart} -to ${trimEnd} "${os.homedir}/Videos/FFhelper/app-output.mp4"`, { stdio: "inherit" }); 
})

require('./SettingsIPC')