require("./renderer.js");
console.log('u are in index.js')
const $ = require('jquery');
const webview = document.getElementById('myweb');

webview.addEventListener('ipc-message', (event)=> {
    if(event.channel == 'return-info'){
        const nom = event.args[0];
        addValue(nom);
    }
})
$('#fromWVbtn').on('click', () => {
    webview.getWebContents().send('get-info');
  });

  addValue=(nom)=>{
      const label= window.document.getElementById('display');
      label.innerHTML=nom.nom;
  }



