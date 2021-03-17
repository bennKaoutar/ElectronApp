//var nodeRequire = require('node-require');
//var ipcRenderer = require('electron');

//const {ipcRenderer} = require("electron");



let electron;
let ipcRenderer;
if(window.nodeRequire){
    electron = window.nodeRequire('electron');
    ipcRenderer= electron.ipcRenderer;
    console.log('node required ');
}
 

console.log(window.nodeRequire);

var Iwebview =(function () {

  ipcRenderer.on('get-info', () => {
  const nom = window.document.getElementById('nom').value;  
  ipcRenderer.sendToHost('return-info', nom);
  }); 


  ipcRenderer.on('CleatAll', () => {
      document.getElementById('myform').reset();
  });   

  ipcRenderer.on('message', ()=>{
      console.warn('testttt');
  
    });
    return Iwebview;
})
window.WebViewElement=new Iwebview();
