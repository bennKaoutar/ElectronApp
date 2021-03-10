const {ipcRenderer} = require('electron');
const { protocol } = require("electron");


console.log('test from renderer');

ipcRenderer.on('get-info', () => {
    const nom = window.document.getElementById('nom').value;  
    ipcRenderer.sendToHost('return-info', nom);
}); 

// const btnServe=document.getElementById("serve");
// btnServe.addEventListener("click", clickedindex);

// function clickedindex ()
// {
//   ipcRenderer.on('get-request',)
// }
const btnclick=window.document.getElementById('serve');

const content="you're connected";
protocol.interceptBufferProtocol("http", (request, result) => {
        if (request.url === "http://www.google.com")
          return result(content);
  });

ipcRenderer.on('CleatAll', () => {
    document.getElementById('myform').reset();
});       
