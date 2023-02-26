import { ipcMain, dialog } from 'electron'
import fs from 'fs'
import path from 'path'

ipcMain.handle('fileDialog', async() => {
    const filePath = dialog.showOpenDialogSync({ properties: ['openFile'] })
    if (filePath === undefined) {
        return(`No file was selected!`)
    }

    console.log(`type: ${typeof filePath!.toString()} | string: ${filePath!.toString()}`)

    if (!fs.existsSync(path.join(filePath!.toString()))) {
        return(filePath!.toString())
    } else {
        return(`File selected does not exist!`)
    }
})

console.log(`[IPC]\tipcMain initialized`)