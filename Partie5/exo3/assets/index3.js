let nom = document.querySelector("#firstname");
let mail = document.querySelector("#mail");
let age = document.querySelector("#age");
let submit = document.querySelector("#submit");

let regexName = /^[a-zA-Z]+$/;
let regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let regexAge = /^\S[0-9]{0,3}$/;


submit.addEventListener('click', () => {
    if (regexName.test(nom.value)==false) {
        document.getElementById("wrongName").style.display="block";
    }else {
        document.getElementById("wrongName").style.display="none";
    }
    if (regexMail.test(mail.value)==false) {
        document.getElementById("wrongMail").style.display="block";
    }else{
        document.getElementById("wrongMail").style.display="none";
    }
    if (regexAge.test(age.value)==false) {
        document.getElementById("wrongAge").style.display="block";
    }else{
        document.getElementById("wrongMail").style.display="none";
    }
})
