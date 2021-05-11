let imgage1 = document.getElementById("img")

imgage1.addEventListener('click', function() {

    imgage1.src="/Partie5/exo4/assets/img/image2.jpg";
    
})
imgage1.addEventListener('mouseover', function() {
    imgage1.classList.add("zoom")

})