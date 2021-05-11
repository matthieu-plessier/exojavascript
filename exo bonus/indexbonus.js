let carre = document.getElementById("carre");

carre.addEventListener('click', () => {
    carre.innerHTML = "hello world"
    carre.classList.remove("greenCarre");
    carre.classList.add("redCarre");
    
})
