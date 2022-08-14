function arrSum(arr) {
    // TODO: 여기에 코드를 작성합니다.
    const head = arr[0];
    // console.log(head);

    const tail = arr.slice(1);
    // console.log(tail)

    if (arr.length <= 0) {
        return 0;
    }

    return head + arrSum(tail);
}

let output = arrSum([1, 3]);
console.log(output); // --> 1

// 힌트
// 배열은 head와 tail을 통해 재귀적으로 정의될 수 있습니다.
// head는 배열의 첫 요소를 말합니다.
// tail은 배열이 head가 제거되고 남은 배열을 말합니다.
// =>
// 1 => 1 +
// 1, 2 => 1 + 2
// 1, 2, 3 => 1 + 2, 3
// 3번의 [2]는 2번에 의해서 2 + [ ]로 정의되고, 따라서 [1, 2]는 최종적으로 1 + 2 + [ ] 로 정의될 수 있습니다.
// 같은 방식으로 4번을 정의해보세요.
// 길이가 1 이상인 배열 arr이 주어졌을 때 head와 tail은 각각 다음과 같이 구할 수 있습니다.

// const head = arr[0];
// const tail = arr.slice(1);
// arrSum(arr)은 arr의 head에 arrSum(tail)을 더하는 방식으로 구할 수 있습니다.