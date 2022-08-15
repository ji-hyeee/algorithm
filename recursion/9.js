function take(num, arr) {
    // TODO: 여기에 코드를 작성합니다.
    if (num === 0 || arr.length === 0) {
        return [];
    }
    const head = arr[0]
    const tail = arr.slice(1)
    console.log(tail)

    return [head].concat(take(num - 1, tail))
}

let output = take(2, [1, -2, 1, 3]);
console.log(output); // --> [1, -2]

output = take(5, [1, -2, 1, 3]);
console.log(output); // --> [1, -2, 1, 3]

// num개의 요소만 포함된 새로운 배열 리턴하기

