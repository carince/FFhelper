import { ipcMain } from "electron"

console.log(`[IPC]\tSettingsIPC initialized`)

interface settingsInt {
    source: string;
    trimConfirm: boolean;
    trimStart: string;
    trimEnd: string;

}

const settings: settingsInt = {
    source: "",
    trimConfirm: false,
    trimStart: "",
    trimEnd: ""
}

ipcMain.on('settings:update', async (event, data) => {
    const setting = Object.keys(data)[0];
    (settings as any)[setting] = data[setting]
    console.log(`[IPC]\tSetting "${setting}" has been updated to: "${data[setting]}"`)
})