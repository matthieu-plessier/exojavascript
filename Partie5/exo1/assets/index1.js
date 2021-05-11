let password = document.getElementById("password");
let confirm = document.getElementById("confirmPassword");
let submit = document.getElementById("submit");

submit.addEventListener('click', () => {
    if (password.value == confirmPassword.value) {
        password.style.borderColor = "green";
        confirmPassword.style.borderColor = "green";
        
    } else {
        password.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";
    }
})