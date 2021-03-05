
console.log('u are in index.js')
const $ = require('jquery');

//const webview = document.getElementById('myweb');

const url = "/Users/kbi6/Documents/webView_elect/elect-app-form/form/index.html";
const divView = window.document.getElementById('webView');
const webview = window.document.createElement('webview');

initWebview = () => {

    webview.setAttribute('id', 'myweb');
    webview.setAttribute('plugins', 'true');

    webview.setAttribute('style', 'display:inline-flex; width:640px; height:480px');
    webview.setAttribute(
        'preload',
        `${__dirname}/renderer.js`,
    );
    webview.setAttribute('src', url);
    divView.appendChild(webview);

    webview.addEventListener("dom-ready", function () {
        webview.openDevTools();
    });
    webview.addEventListener('ipc-message', (event) => {
        if (event.channel == 'return-info') {
            const texte = event.args[0];
            addValue(texte);
        }
    });

}

initWebview();


$('#fromWVbtn').on('click', () => {
    webview.send('get-info');
});

addValue = (nom) => {
    const label = window.document.getElementById('display');
    label.innerHTML = nom;
    console.log(nom);
}


