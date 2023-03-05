import { contextBridge, ipcRenderer } from "electron"

console.log(`[API]\tSettingsAPI initialized`)

contextBridge.exposeInMainWorld("settings", {
    update: async (category: string, setting: string, data: any) => {
        console.log(`[API]\tCategory: ${category}, Setting: ${setting}, Data: ${data}`)
        let payload: any = {};
        (payload as any)[category] = {};
        (payload as any)[category][setting] = data
        ipcRenderer.send('settings:update', payload)
    }
})