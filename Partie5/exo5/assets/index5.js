let text = document.getElementById("text")

let rose = document.getElementById("rose");
let blue = document.getElementById("blue");
let violet = document.getElementById("violet");
let bold = document.getElementById("bold")
let italic = document.getElementById("italic")

rose.addEventListener("click" , function (){
    text.style.color = "pink";
});
blue.addEventListener("click" , function (){
    text.style.color = "blue";
})
violet.addEventListener("click" , function (){
    text.style.color = "violet";
})
bold.addEventListener("click", function (){
    text.style.fontWeight = "bold";
})
italic.addEventListener("click", function(){
    text.style.fontStyle = "italic"
}) 