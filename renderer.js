const {ipcRenderer} = require('electron');
console.log('test from renderer');

ipcRenderer.on('get-info', () => {
    const nom = window.document.getElementById('nom').value;  
    ipcRenderer.sendToHost('return-info', nom);
});         
        
