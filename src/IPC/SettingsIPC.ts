import { ipcMain } from "electron"

console.log(`[IPC]\tSettingsIPC initialized`)

interface settingsInt {
    video: {
        sourcePath: string;
        exportName: string;
    }
    trim: {
        confirm: boolean;
        start: string;
        end: string;
    }
}

const settings: settingsInt = {
    video: {
        sourcePath: "",
        exportName: "",
    },
    trim: {
        confirm: false,
        start: "",
        end: ""
    }
}


ipcMain.on('settings:update', async (event, payload) => {
    const category = Object.keys(payload)[0];
    const setting = Object.keys(payload[category])[0];
    const data: any = payload[category][setting];
    (settings as { [key: string]: any })[category][setting] = data
    console.log(`[IPC]\tSettings has been updated: ${category}.${setting} = ${data}`)
})