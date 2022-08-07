function computePower(base, exponent) {
    // TODO: 여기에 코드를 작성합니다.
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result = result * base;
    }
    return result;
}

let output = computePower(2, 3);
console.log(output); // --> 8

  // 통과못한 코드
  // function computePower(base, exponent) {
  //   // TODO: 여기에 코드를 작성합니다.
  //   let result;
  //   for (let i = 0; i < exponent; i++) {
  //     result = base ** exponent;
  //   }
  //   return result;
  // }