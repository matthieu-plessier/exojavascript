let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];

days.forEach(element => {
    if (element== "Samedi" || element =="Dimanche") {
        document.write(` <span style="font-weight: bold;"><br>${element}</span>`);
    } else {
    document.write(` <br>${element}`)
    }
});
