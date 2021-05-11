let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let submit = document.getElementById("submit");

submit.addEventListener('click', () => {
    if (password.value == confirmPassword.value) {
        password.classList.add("same");
        confirmPassword.classList.add("same");
        password.classList.remove("different");
        confirmPassword.classList.remove("different");


    } else {
        password.classList.add("different");
        confirmPassword.classList.add("different");
        password.classList.remove("same");
        confirmPassword.classList.remove("same");
    }
})