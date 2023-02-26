import { ipcMain } from "electron"

console.log(`[IPC]\tSettingsIPC initialized`)

interface settingsInt {
    source: string;
    trim: {
        confirm: boolean;
        start: string;
        end: string;
    }
}

const settings: settingsInt = {
    source: "",
    trim: {
        confirm: false,
        start: "",
        end: ""
    }
}

ipcMain.on('settings/update', async (event, data): Promise<void> => {
    console.log(`[IPC] Settings: ${data}`);
    // console.log(`[IPC]\tSetting updated: ${setting}: ${data}`);
    // (settings as any)[setting] = data
})