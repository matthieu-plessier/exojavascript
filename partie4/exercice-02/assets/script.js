// Déclaration des fonctions nommées
function setStrong(){
    document.getElementById('text').style.fontWeight = "bold";
}

function color(){
    document.getElementById('text').style.color = "blue";
}

function size(tag){ // On peut aussi passer en argument un paramètre. Ici il contient l'element html ciblé.
    tag.style.fontSize = "40px";
}
// ------------------------------

// On cible l'élement html qui a pour id "btnBold" et on y ajoute un évènement de type "clic" 
// auquel on demande l'éxecution de la fonction anonyme. Dans cette fonction anonyme, on fait appel
// à la fonction "setStrong"
document.getElementById('btnBold').addEventListener("click" , function (){
    setStrong();
} );

// Autre manière de coder l'event.
// document.getElementById('btnBold').onclick = function(){
//     setStrong();
// }

// Cette fois on ajoute un évènement 'clic' sur l'élement html 'btnColor' qui doit exécuter la fonction 'color'
document.getElementById('btnColor').addEventListener("click" , function(){
    color();
} );


// On peut aussi passer par une variable intermédiaire pour sélectionner notre element HTML
// Ici une variable 'btnSize' qui cible le bouton
let btnSize = document.getElementById('btnSize');

btnSize.addEventListener("click" , function(){
    // Ici une variable 'textTag' qui cible toute la zone de texte placée dans l'id 'textTag'
    let textTag = document.getElementById('text');
    size(textTag);
} )
