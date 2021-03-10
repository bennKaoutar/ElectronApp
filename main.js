const { app, BrowserWindow, ipcMain} = require('electron')

/*ipcMain.on("msg", (event, data) => {
    console.warn(data) // affiche "ping"
    event.reply('reply', 'from main')

  })*/



ipcMain.on('invokeAction', function(event,data){
  var result = processData(data);
  event.sender.send('actionReply', result);
  //console.warn('test from main');
});


function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true
    }
  })

  //win.loadFile('index.html')
  win.loadURL(`file://${__dirname}/index.html`)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
