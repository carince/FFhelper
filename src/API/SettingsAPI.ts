import { contextBridge, ipcRenderer } from "electron"

console.log(`[API]\tSettingsAPI initialized`)

contextBridge.exposeInMainWorld("settings", {
    update: async (setting: string, data: any) => {
        let payload: any = {};
        (payload as any)[setting] = data
        ipcRenderer.send('settings:update', payload)
    }
})