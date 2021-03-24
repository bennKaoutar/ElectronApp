window.nodeRequire = require;
delete window.require;
delete window.exports;
delete window.module;

console.log('test from renderer');

const {ipcRenderer} = require("electron");



// (function (Class, Events) {
//     'use strict'
//     var WapCompassApp = Class.extend(Events,{
//         nsWebViewInterface: window && window.nsWebViewInterface,
//         init(nom){
//             this.sendToNative('get-info',nom)
//         },

//         sendToNativeApp (event, data) {
//              return this.nsWebViewInterface.emit(event, data)
//           }   
//     })
//     return WapCompassApp;
// })();


ipcRenderer.on('CleatAll', () => {
    document.getElementById('myform').reset();

}); 



// ipcRenderer.on('get-info', () => {
//     const nom = window.document.getElementById('nom').value;  
//     ipcRenderer.sendToHost('return-info', nom);
// }); 

// // const btnServe=document.getElementById("serve");
// // btnServe.addEventListener("click", clickedindex);

// // function clickedindex ()
// // {
// //   ipcRenderer.on('get-request',)
// // }


// ipcRenderer.on('CleatAll', () => {
//     document.getElementById('myform').reset();
// });   

// ipcRenderer.on('message', ()=>{
//     console.warn('testttt');
// })
