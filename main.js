const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');
const fs = require('fs');

function createWindow(){
  const win = new BrowserWindow({
    width: 1280, height: 820, minWidth: 1000, minHeight: 650,
    backgroundColor: '#f2f5f2',
    webPreferences: { preload:path.join(__dirname,'preload.js'), contextIsolation:true, nodeIntegration:false }
  });
  win.loadFile('index.html');
}
app.whenReady().then(()=>{ createWindow(); app.on('activate',()=>{ if(BrowserWindow.getAllWindows().length===0) createWindow(); }); });
app.on('window-all-closed',()=>{ if(process.platform!=='darwin') app.quit(); });

ipcMain.handle('save-file', async (_, {defaultName, content, type})=>{
  const { dialog } = require('electron');
  const result = await dialog.showSaveDialog({defaultPath:defaultName, filters:[
    {name:'HTML / Word-compatible', extensions:['doc','html']},
    {name:'Text',extensions:['txt']},
    {name:'All Files',extensions:['*']}
  ]});
  if(result.canceled) return {cancelled:true};
  fs.writeFileSync(result.filePath, content, 'utf8');
  return {cancelled:false,path:result.filePath};
});
ipcMain.handle('open-source', async (_, url)=>{ await shell.openExternal(url); return true; });
