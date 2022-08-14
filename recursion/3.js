function factorial(num) {
    // TODO: 여기에 코드를 작성합니다.
    // 별도의 최적화 기법(memoization)은 금지됩니다.
    console.log(num)

    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1)
}

let output = factorial(5);
console.log(output); // --> 3628800

// 힌트
// factorial(n)은 자연수 1부터 n까지의 곱을 계산하는 함수입니다.
// factorial(1) = 1
// factorial(2) = 1 * 2 = 2
// factorial(3) = 1 * 2 * 3 = 6
// factorial(4) = 1 * 2 * 3 * 4 = 24