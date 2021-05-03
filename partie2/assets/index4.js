let note = prompt("Saisir votre note");

if (note<=3) {
    alert("Nul");
}
if (note>=4 && note<=6) {
    alert("moyen");
} 
if (note>6 &&note<=8) {
    alert("Assez Bien");
}
if (note>8 && note<=9) {
    alert("Bien");
}
if (note==10) {
    alert("Excellent");
}
if (note>10) {
    alert("Mauvaise saisie");
}