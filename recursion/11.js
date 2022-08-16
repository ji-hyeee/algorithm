function or(arr) {
    // TODO: 여기에 코드를 작성합니다.
    if (arr.length === 0) {
        return false;
    }

    return arr[0] || or(arr.slice(1))
}

let output = or([true, true, false]);
console.log(output); // --> true

output = or([false, false, false]);
console.log(output); // --> false