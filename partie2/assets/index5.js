let day = parseInt(prompt("Saisir un chiffre entre 1 et 7"));

switch (day) {
    case "1":
        alert("lundi");
        break;
    case "2":
        alert("mardi");
        break;
    case "3":
        alert("mercredi");
        break;
    case "4":
        alert("jeudi");
        break;
    case "5":
        alert("vendredi");
        break;
    case "6":
        alert("samedi");
        break;
    case "7":
        alert("dimanche");
        break;
    default:
        alert("Désolé, ce chiffre ne correspond à aucun jour de la semaine")
}
