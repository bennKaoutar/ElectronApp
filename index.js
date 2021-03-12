
console.log('u are in index.js')
const $ = require('jquery');
const { protocol } = require("electron");

//const webview = document.getElementById('myweb');

const url = "/form/index.html";
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
    
}

/*----from my view to WB---*/

const clearAllbtn = document.getElementById("toWBbtn");

$('#toWBbtn').on('click', () => {
    webview.send('CleatAll');
});



// function logURL(requestDetails) {
//     console.log("Chargement : " + requestDetails.url);
//   }
  
//   webview.webRequest.onBeforeRequest.addListener(
//     logURL,
//     {urls: ["<all_urls>"]}
//   );  



//   var webViewEl = document.getElementById("myweb"); 
//     webViewEl.addEventListener("did-get-response-details", function(details) {
//     console.log(details); 
// }); 

// const content = "you've been connected!";

// protocol.interceptHttpProtocol("http", (request, result) => {
//   if (request.url === "http://www.google.com")
//     return result(content);
//   // fetch other http protocol content and return to the electron
// });


