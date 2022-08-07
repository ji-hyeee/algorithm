function factorial(num) {
    // TODO: 여기에 코드를 작성합니다.
    let fac = 1;

    for (let i = 1; i <= num; i++) {
        fac = fac * i;
    }

    return fac;
}

let output = factorial(5);
console.log(output); // --> 120

// use for loop
// factorial(0) === 1
// num = 3
// 1 * 2 * 3
// 1 * (1+1) * (1+1)+1 >>> n = n + 1