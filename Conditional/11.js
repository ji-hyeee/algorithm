function isEitherEvenAndLessThan9(num1, num2) {
    // TODO: 여기에 코드를 작성합니다.
    return (num1 % 2 === 0 || num2 % 2 === 0) && (num1 < 9 && num2 < 9) ? true : false;
}

let output = isEitherEvenAndLessThan9(2, 4);
console.log(output); // --> true

output = isEitherEvenAndLessThan9(72, 2);
console.log(output); // --> false