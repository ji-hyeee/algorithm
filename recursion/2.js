function isOdd(num) {
    // TODO: 여기에 코드를 작성합니다.
    let abs = Math.abs(num);
    console.log(abs)

    if (abs === 1) {
        return true;
    } else if (abs === 0) {
        return false;
    }

    return isOdd(abs - 2)
}

let output = isOdd(17);
console.log(output); // --> true

output = isOdd(-8);
console.log(output); // --> false

// 나누기 연산자 없이 홀수 구분하는 법
// 2를 계속 빼준다 1이나 0이 될 때까지