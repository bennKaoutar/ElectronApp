"use strict";
console.log('we are in js');



function formalert (){
     var nom= document.getElementById("nom").value;
     alert(nom);     
    }

/*function serve(){
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://www.google.com", true);
    xhttp.setRequestHeader("testRep","name");     
    xhttp.send("kaoutar");


    //window.postMessage('message','message')

    // xhttp.onreadystatechange = function(){
    //     if(this.readyState ==4 && this.status ==200){
    //         alert(this.responseText);
    //     }
    // }
}*/



function serve(){
var open = window.XMLHttpRequest.prototype.open,  
  send = window.XMLHttpRequest.prototype.send;

function openReplacement(method, url, async, user, password) {  
  this._url = url;
  return open.apply(this, arguments);
}

function sendReplacement(data) {  
  if(this.onreadystatechange) {
    this._onreadystatechange = this.onreadystatechange;
  }
 
  console.log('Request sent');
  
  this.onreadystatechange = onReadyStateChangeReplacement;
  return send.apply(this, arguments);
}

function onReadyStateChangeReplacement() {  
  
  console.log('Ready state changed to: ', this.readyState);
  
  if(this._onreadystatechange) {
    return this._onreadystatechange.apply(this, arguments);
  }
}

window.XMLHttpRequest.prototype.open = openReplacement;  
window.XMLHttpRequest.prototype.send = sendReplacement;

var request = new XMLHttpRequest();
request.open('GET', '"http://www.google.com"', true);
request.send();

}

window.XMLHttpRequest.prototype.send=function(){
    console.log('redirection');
    
}


   
