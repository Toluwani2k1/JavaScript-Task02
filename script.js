const operator = prompt('Choose operator ( either +, -, * or / ): ');

const number1 = parseFloat(prompt('Input first number: '));
const number2 = parseFloat(prompt('Input second number: '));

let result;

if (operator == '+') {
    result = number1 + number2;
} else if (operator == '-') {
    result = number1 - number2;
} else if (operator == '*') {
    result = number1 * number2;
} else {
    result = number1 / number2;
}

window.alert("Answer is =" + result);