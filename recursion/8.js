function drop(num, arr) {
    // TODO: 여기에 코드를 작성합니다.
    if (num === 0 || arr.length === 0) {
        return arr;
    }
    const tail = arr.slice(1);
    console.log(tail)

    return drop(num - 1, tail)
}

let output = drop(2, [1, -2, 1, 3]);
console.log(output); // --> [1, 3]

output = drop(5, [1, -2, 1, 3]);
console.log(output); // --> [ ]

// 배열 요소 제거하기
// arr.slice(1)