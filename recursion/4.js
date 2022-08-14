function fibonacci(num) {
    // TODO: 여기에 코드를 작성합니다.
    // 별도의 최적화 기법(memoization)은 금지됩니다.
    if (num <= 1) {
        console.log(num)
        return num;
    }

    return fibonacci(num - 1) + fibonacci(num - 2)
}

let output = fibonacci(5);
console.log(output); // --> 5

// output = fibonacci(9);
// console.log(output); // --> 34

// 0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1입니다. 
// 그 다음 2번째 피보나치 수부터는 바로 직전의 두 피보나치 수의 합으로 정의합니다.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

// 1
// 1-1 + 1-0
// 2
// 2-1 + 2-1
// 3
// 3-2 + 3-1
// n
// n-2 + n-1