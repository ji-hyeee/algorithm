function makeMultiplesOfDigit2(num1, num2) {
    // TODO: 여기에 코드를 작성합니다.
    let a = num1, b = num2, count = 0;
  
    if (num1 > num2) {
      a = num2;
      b = num1;
    }
  
    if (a === 0) {
      a = 1;
    }
  
    for (let i = a; i <= b; i++) {
      if (i % 2 === 0) {
        count = count + 1;
      }
    }
    return count;
  }
  
  let output = makeMultiplesOfDigit2(8, 12);
  console.log(output); // --> 3
  
  output = makeMultiplesOfDigit2(12, 8);
  console.log(output); // --> 3
  
  output = makeMultiplesOfDigit2(1, 3);
  console.log(output); // --> 1
  
  output = makeMultiplesOfDigit2(0, 0);
  console.log(output); // --> 0
  
  output = makeMultiplesOfDigit2(2, 2);
  console.log(output); // --> 1
  
  // 통과못한 코드
  // 0이 인자 1곳에 들어가면 카운트가 1개 더 세어진다 0을 못 거름
  // function makeMultiplesOfDigit2(num1, num2) {
  //   // TODO: 여기에 코드를 작성합니다.
  //   if (num1 === 0 && num2 === 0) {
  //     return 0;
  //   }
  
  //   let count = 0;
  
  //   if (num1 > num2) {
  //     for (let i = num2; i <= num1; i++) {
  //       if (i % 2 === 0) {
  //         count++;
  //       }
  //     }
  //   } else {
  //     for (let i = num1; i <= num2; i++) {
  //       if (i % 2 === 0) {
  //         count++;
  //       }
  //     }
  //   }
  //   return count;
  // }