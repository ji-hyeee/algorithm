function arrLength(arr) {
    // TODO: 여기에 코드를 작성합니다.
    const tail = arr.slice(1);

    if (arr.length === 1) {
        return true;
    }

    return 1 + arrLength(tail)
}

let output = arrLength([1, -2, 1, 3]);
console.log(output); // --> 4

// 배열의 길이
// arr.length 사용 금지
// 문제를 위해 만든 커스텀 메소드 사용하기
// [ ].isEmpty() === true
// [1, 2].isEmpty() === false

function arrLength(arr) {
    // TODO: 여기에 코드를 작성합니다.
    const tail = arr.slice(1);

    if (arr.isEmpty()) {
        return 0;
    }

    return 1 + arrLength(tail)
}