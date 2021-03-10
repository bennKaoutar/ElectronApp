"use strict";
console.log('we are in js');



function formalert (){
     var nom= document.getElementById("nom").value;
     alert(nom);     
    }

function serve(){
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://www.google.com", true);
    xhttp.setRequestHeader("testRep","name");     
    xhttp.send("kaoutar");

    xhttp.onreadystatechange = function(){
        if(this.readyState ==4 && this.status ==200){
            alert(this.responseText);
        }
    }
}

// window.XMLHttpRequest.prototype.send=function(){
//     console.log('redirection');
// }




   
