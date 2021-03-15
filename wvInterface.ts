const {ipcRenderer} = require('electron');


import {IpcMainEvent} from 'electron';


console.log('test from interface');

export interface wvInterface {
  ipcRenderer.on('get-info', () => {
  const nom = window.document.getElementById('nom').value;  
  ipcRenderer.sendToHost('return-info', nom);
  }); 


  ipcRenderer.on('CleatAll', () => {
      document.getElementById('myform').reset();
  });   

  ipcRenderer.on('message', ()=>{
      console.warn('testttt');
  })
  }
