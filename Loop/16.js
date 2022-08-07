function getSumOfFactors(num) {
    // TODO: 여기에 코드를 작성합니다.
    let result = 1;

    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            result = result + i;
        }
    }

    return result;
}

let output = getSumOfFactors(8);
console.log(output); // --> 15 (1 + 2 + 4 + 8)

output = getSumOfFactors(12);
console.log(output); // --> 28 (1 + 2 + 3 + 4 + 6 + 12)

  // 약수 
  // num % i === 0
  // result = result + i;