function isOdd(num) {
    // TODO: 여기에 코드를 작성합니다.
    let odd = Math.abs(num);

    while (odd >= 0) {
        if (odd === 0) { return false };
        if (odd === 1) { return true };
        odd = odd - 2;
    }
}

// while O
// for X
// / X % X
// 0 === even

let output = isOdd(17);
console.log(output); // --> true

output = isOdd(-8);
console.log(output); // --> false