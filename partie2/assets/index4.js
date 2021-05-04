let note = parseInt (prompt("Saisir votre note"));

if (note<0 || note>10) {
    alert("Mauvaise saisie")
}else{
    if (note<=3) {
        alert("Nul");
    }
    else if (note>=4 && note<=6) {
        alert("moyen");
    } 
    else if (note>6 &&note<=8) {
        alert("Assez Bien");
    }
    else if (note>8 && note<=9) {
        alert("Bien");
    }
    else {
        alert("Excellent");
    }
}
