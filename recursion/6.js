function arrProduct(arr) {
    // TODO: 여기에 코드를 작성합니다.
    const head = arr[0];
    const tail = arr.slice(1);

    if (arr.length === 0) {
        return 1;
    }

    return head * arrProduct(tail);
}

let output = arrProduct([1, -2, 1, 3]);
console.log(output); // --> -6

// const head = arr[0]
// const tail = arr.slice(1)