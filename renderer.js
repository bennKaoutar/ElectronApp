window.nodeRequire = require;
delete window.require;
delete window.exports;
delete window.module;


const {ipcRenderer} = require("electron");

//var webViewInterfaceModule = require('./wvInterface');

console.log('test from renderer');



// const nom = window.document.getElementById('nom').value;  
// webViewInterfaceModule.send('get-info',nom);


// webViewInterfaceModule.send('CleatAll', () => {
//     document.getElementById('myform').reset();
// });

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
