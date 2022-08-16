function and(arr) {
    // TODO: 여기에 코드를 작성합니다.
    if (arr.length === 0) {
        return true;
    }

    if (arr[0] === false) {
        return false;
    }

    return and(arr.slice(1))
}

let output = and([true, true, true]);
console.log(output); // --> true

output = and([true, true, false]);
console.log(output); // --> false

output = and([]);
console.log(output) // --> true

