const { app, BrowserWindow, ipcMain} = require('electron')

/*ipcMain.on("msg", (event, data) => {
    console.warn(data) // affiche "ping"
    event.reply('reply', 'from main')

  })
  var webview = document.getElementById("myweb");
// When everything is ready, trigger the events without problems
  webview.addEventListener("dom-ready", function() {
  // Show devTools if you want
  //webview.openDevTools();
  console.log("DOM-Ready, triggering events !");
  
  // Aler the scripts src of the website from the <webview>
  webview.send("request");
  
  // alert-something
  webview.send("alert-something", "Hey, i'm alerting this.");

      // change-text-element manipulating the DOM
      webview.send("change-text-element",{
        id: "myelementID",
        text: "My text"
    });
});

  // Process the data from the webview
webview.addEventListener('ipc-message',function(event){
  console.log(event);
  console.info(event.channel);
});*/

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
