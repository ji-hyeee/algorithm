function miniCalculator(num1, num2, operator) {
    // TODO: 여기에 코드를 작성합니다.
    if (operator === '+') { return num1 + num2 }
    if (operator === '-') { return num1 - num2 }
    if (operator === '*') { return num1 * num2 }
    if (operator === '/') { return num1 / num2 }
}

let output = miniCalculator(3, 4, '+');
console.log(output); // --> 7

output = miniCalculator(9, 3, '/');
console.log(output); // --> 3