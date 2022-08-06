function isGreaterThan30(temp) {
    // TODO: 여기에 코드를 작성합니다.
    return (temp < 30) ? '여름이 매우 덥네요' : '에어컨을 켜야겠다!'
}

let output = isGreaterThan30(29);
console.log(output); // --> `여름이 매우 덥네요`

output = isGreaterThan30(30);
console.log(output); // --> `에어컨을 켜야겠다!`