function multiply(firstNumber,secondNumber) {
    let result = firstNumber*secondNumber;
    return  result;
}

let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");


let resulthtml = document.getElementById("resulthtml");

resulthtml.addEventListener('click', function () {
    let result = document.getElementById("result");
    result.innerHTML=multiply(firstNumber.value, secondNumber.value);
})
