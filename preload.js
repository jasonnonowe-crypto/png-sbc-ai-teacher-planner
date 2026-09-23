const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('desktopAPI',{
  saveFile:(data)=>ipcRenderer.invoke('save-file',data),
  openSource:(url)=>ipcRenderer.invoke('open-source',url)
});
