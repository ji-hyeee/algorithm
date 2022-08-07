function makeMultiplesOfDigit(num) {
    // TODO: 여기에 코드를 작성합니다.
    result = '';

    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0) {
            result = result + `${i}`
        }
    }

    return result;
}

let output = makeMultiplesOfDigit(7);
console.log(output); // --> "36"

output = makeMultiplesOfDigit(19);
console.log(output); // --> "369121518"

  // for
  // num = 7
  // 1234567 >>> 36
  // num % 3 === 0