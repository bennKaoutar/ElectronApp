//var nodeRequire = require('node-require');
//var ipcRenderer = require('electron');



// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
// const siblingModule = require('./sibling-module');
// const {ipcRenderer} = require('electron');

let electron;
let ipcRenderer;
if(window.nodeRequire){
    electron = window.nodeRequire('electron');
    ipcRenderer= electron.ipcRenderer;
    console.log('node required ');
}
 

//console.log(nodeRequire);

const nom = document.getElementById('nom').value;
console.log(nom);

var Iwebview =(function () { 

Iwebview.prototype.on('get-info',()=>{
    const nom = window.document.getElementById('nom').value;
    ipcRenderer.sendToHost('return-info', nom);
    console.log(nom);
})

//   ipcRenderer.on('CleatAll', () => {
//       document.getElementById('myform').reset();
//   });   

//   ipcRenderer.on('message', ()=>{
//       console.warn('testttt');
  
//     });
      return Iwebview;
})
window.WebViewElement=new Iwebview();
