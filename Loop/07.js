function makeDigits2(num) {
    // TODO: 여기에 코드를 작성합니다.
    let i = 1;
    let result = '';

    while (num > 0) {
        result = result + `${i}` + '-';
        i++
        num--;
    }

    return result.slice(0, -1);
}

let output = makeDigits2(5);
console.log(output); // --> "1-2-3-4-5"

output = makeDigits2(7);
console.log(output); // --> "1-2-3-4-5-6-7"

  // use while
  // '-'