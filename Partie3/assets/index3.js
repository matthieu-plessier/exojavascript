let firstNumber = 5;
let secondNumber = 5;
let total=0;

while (total < 250) {
    document.write(firstNumber * secondNumber + "<br>");
    total = firstNumber*secondNumber
    secondNumber = total;
}