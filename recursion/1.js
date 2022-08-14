function sumTo(num) {
    // TODO: 여기에 코드를 작성합니다.
    // 별도의 최적화 기법(memoization)은 금지됩니다.
    if (num === 0) {
        return 0;
    }

    return num + sumTo(num - 1);
}

let output = sumTo(10);
console.log(output); // --> 55

// 힌트
// sumTo(n)은 자연수 1부터 n까지의 합을 계산하는 함수입니다.
// sumTo(1) = 1
// sumTo(2) = 1 + 2 = 3
// sumTo(3) = 1 + 2 + 3 = 6
// sumTo(4) = 1 + 2 + 3 + 4 = 10