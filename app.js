
// ici ont recupère les div sur lesquels ont va travaillé
let divOpen = document.querySelector(".open");
let closeTop = document.querySelector("#closeTop");
let closeBottom = document.querySelector("#closeBottom");

let divClose = document.querySelector(".close");
let rotateTop =document.querySelector("#rotateTop");
let rotateBottom = document.querySelector("#rotateBottom");

// ici ont donne les evenement clique et on appel les function
divOpen.addEventListener("click", animationopen);
divClose.addEventListener("click", animationclose);

// ici ont creer les function
function animationopen(){


    closeTop.style.animation = "1s translateTop";
    closeBottom.style.animation= "1s translateBottom";

    // textsousburger.style.animation = "1s rotaburger";
    // textsousburger.style.animationFillMode = "1s forwards";

    setTimeout(function(){
        divOpen.className = "open none";
        divClose.className ="close flex";

        rotateTop.style.animation = "1s rotateTop";
        rotateTop.style.animationFillMode = "forwards";
        
        rotateBottom.style.animation = "1s rotateBottom";
        rotateBottom.style.animationFillMode="forwards";

    }, 980 );
}

function animationclose(){

    rotateTop.style.animation = "1s rotateTopclose";
    rotateBottom.style.animation = "1s rotateBottomclose";

    // textsousburger.style.animation = "1s rotaburger";
    // textsousburger.style.animationFillMode = "1s forwards";

    setTimeout(function(){
        divOpen.className = "open flex";
        divClose.className ="close none";

        closeTop.style.animation = "1s translateTopclose";
        closeBottom.style.animation= "1s translateBottomclose";

    }, 980 );
}




