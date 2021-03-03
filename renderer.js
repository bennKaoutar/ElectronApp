const {ipcRenderer} = require('electron');
console.log('test from renderer');
//console.warn('loaded');

    //const webview = document.querySelector("#myweb");
    const webview = document.getElementById('myweb');
    const loadiing = document.querySelector(".loading");
    
/*     if(validbtn.clicked == true)
{
   console.log("button was clicked");
} */
    webview.addEventListener("dom-ready", function(){
        
            webview.openDevTools();
            //webview.executeJavaScript("const validbtn= document.querySelector('.kaoutarbtn');  console.log(validbtn);  promise.resolve('validbtn');").then((validbtn)=>console.log(validbtn));
            
            //const validbtn= document.querySelector('.kaoutarbtn'); 
           /*  console.log('DOM fully loaded and parsed');
            validbtn.addEventListener('click', function(){
             ipcRenderer.once('actionReply',function(event, response){
                    processResponse(response);
                })
                ipcRenderer.send('invokeAction','someData');  
                console.log('test from btn');

                
            });*/

            ipcRenderer.on('get-info', () => {
                const nom = window.document.getElementById('nom').value;
                
                ipcRenderer.sendToHost('return-info', {nom});
              });

        });

    
  
    
   


window.onload =()=>{
    
 /*   webview.addEventListener("did-start-loading", ()=>{
        console.warn('loading..');
    })

    webview.addEventListener("did-stop-loading", ()=>{
        loadiing.innerHTML='stopped!'
    })

    webview.addEventListener("dom-ready",()=>{
        console.warn("dom is charged");
        
    })

        // Do something according to a request of your mainview
    ipcRenderer.on('request', function(){
        ipcRenderer.sendToHost(getScripts());
    });
    //webview.getElementsByClassName("kaoutarbtn").value

    ipcRenderer.on("alert-something",function(event,data){
        alert(data);
    });

    ipcRenderer.on("change-text-element",function(event,data){
        // the document references to the document of the <webview>
        document.getElementById(data.id).innerHTML = data.text;
    });
 
   /**
 * Simple function to return the source path of all the scripts in the document
 * of the <webview>
 *
 *@returns {String}
 *
   function getScripts(){
       var items = [];
       
       for(var i = 0;i < document.scripts.length;i++){
           items.push(document.scripts[i].src);
       }
       
       return JSON.stringify(items);
   }*/

}