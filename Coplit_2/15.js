function modulo(num1, num2) {
    // TODO: 여기에 코드를 작성합니다.
    if (num2 === 0) {
        return 'Error: cannot divide by zero';
    }

    while (num1 >= num2) {
        num1 = num1 - num2
    }
    return num1;
}

let output = modulo(4, 4);
console.log(output); // --> 1

// 의사코드
// 나눗셈, 나머지 연산자 사용 금지 >>> 빼기
// 0으로 나누는 경우 메세지 리턴