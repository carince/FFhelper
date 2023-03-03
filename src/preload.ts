import { contextBridge, ipcRenderer } from "electron"

console.log(`[App]\tPreload Initialized`)

contextBridge.exposeInMainWorld("api", {
    fileDialog: async () => {
        let filePath = await ipcRenderer.invoke('fileDialog');
        return (filePath)
    },

    run: async () => {
        ipcRenderer.send('run')
    }
})

require('./API/SettingsAPI')