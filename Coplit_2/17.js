function computeSquareRoot(num) {
    // TODO: 여기에 코드를 작성합니다.
    return Math.pow(num, 1 / 2).toFixed(2)
}

let output = computeSquareRoot(9);
console.log(output); // --> 3

output = computeSquareRoot(6);
console.log(output); // --> 2.45

// Math.pow()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
// toFixed()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed