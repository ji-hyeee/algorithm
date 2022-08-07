function makeOddDigits(num) {
    // TODO: 여기에 코드를 작성합니다.
    let make = 1;
    let result = '';

    while (num > 0) {
        result = result + make;
        num--
        make = make + 2;
    }

    return result;
}

let output = makeOddDigits(3);
console.log(output); // --> "135"

output = makeOddDigits(5);
console.log(output); // --> "13579"

  // while
  // num = 5
  // 13579
  // let i = 1
  // i + 2