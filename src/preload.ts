import { contextBridge, ipcRenderer } from "electron"

console.log(`[App]\tPreload Initialized`)

contextBridge.exposeInMainWorld("api", {
    fileDialog: async () => {
        const filePath = await ipcRenderer.invoke('fileDialog')
        const element = document.querySelector(`p.filePath`)
        element!.innerHTML = filePath
    }
})