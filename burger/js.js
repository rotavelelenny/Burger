// recuperation des divs

let accueil = document.querySelector(".accueil");
let descritpion = document.querySelector(".descritpion");

// récuperation de résultats des divs
let textacceuil = document.querySelector("textaccueil");
let textdescritpion = document.querySelector(".textdescritpion");

// attribué des évènements clique
     accueil.addEventListener("dblclick", function(){
         textaccueil.className= "textaccueil";
         textdescritpion.className= "textdescription none"
     })

     descritpion.addEventListener("click", function(){
         textdescritpion.className= "textdescritpion";
         textaccueil.className= "textaccueil none";
     })