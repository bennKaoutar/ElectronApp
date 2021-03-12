const {ipcRenderer} = require('electron');


console.log('test from interface');

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


ipcRenderer.on('CleatAll', () => {
    document.getElementById('myform').reset();
});   

ipcRenderer.on('message', ()=>{
    console.warn('testttt');
})