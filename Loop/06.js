function makeDigits(num) {
    // TODO: 여기에 코드를 작성합니다.
    let make = ''

    for (let i = 1; i <= num; i++) {
        make = make + `${i}`
    }

    return make;
}

let output = makeDigits(5);
console.log(output); // --> "12345"

output = makeDigits(7);
console.log(output); // --> "1234567"

  // use for loop
  // num = 5
  // 12345