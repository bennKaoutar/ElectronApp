window.nodeRequire = require;
delete window.require;
delete window.exports;
delete window.module;

const {ipcRenderer} = require("electron");

// import{wvInterface} from "./wvInterface";

// const wvInterface = new wvInterface;

console.log('test from renderer');

// const nom = window.document.getElementById('nom').value;  
// wvInterface.send(nom);

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
