console.warn('loaded');
window.onload=()=>{
    const webview = document.querySelector("#myweb")
    const loadiing = document.querySelector(".loading")
    
    webview.addEventListener("did-start-loading", ()=>{
        loadiing.innerHTML='loading..'
    })

    webview.addEventListener("did-stop-loading", ()=>{
        loadiing.innerHTML='stopped!'
    })

    webview.addEventListener("dom-ready", ()=>{
        console.warn("dom is charged");
    })

    

}