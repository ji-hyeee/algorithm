function isPythagorean(side1, side2, side3) {
    // TODO: 여기에 코드를 작성합니다.
    const one = Math.pow(side1, 2);
    const two = side2 ** 2;
    const three = side3 * side3;

    return (one === two + three) ? true
        : (two === one + three) ? true
            : (three === one + two) ? true
                : false;
}

// Math.pow(x, y)
// x ** y
// x * x

let output = isPythagorean(3, 4, 5);
console.log(output); // --> true (5 * 5 = 3 * 3 + 4 * 4)

isPythagorean(5, 3, 4);
console.log(output); // --> true

output = isPythagorean(6, 4, 5);
console.log(output); // --> false