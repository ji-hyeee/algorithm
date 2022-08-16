function reverseArr(arr) {
    // TODO: 여기에 코드를 작성합니다.
    if (arr.length === 0) {
        return [];
    }
    console.log(arr.slice(1))
    console.log(arr[0])

    return reverseArr(arr.slice(1)).concat(arr[0])
}

let output = reverseArr([1, 2, 3]);
console.log(output); // --> [3, 2, 1]

output = reverseArr([1, 5, 9]);
console.log(output); // --> [9, 5, 1]

// 순서가 뒤집힌 배열
// 베열 자르기 slice
// 이어 붙이기 concat
// [3]
// [3, 2]
// [3, 2, 1]