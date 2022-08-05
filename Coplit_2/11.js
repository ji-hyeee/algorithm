function removeExtremes(arr) {
    let long;
    let short;

    for (let i of arr) {
        if (long === undefined || short === undefined) { long = i, short = i }
        if (i.length >= long.length)
            long = i
        if (i.length <= short.length)
            short = i

    }
    arr.splice(arr.indexOf(long), 1)
    arr.splice(arr.indexOf(short), 1)

    return arr;
}
let output = removeExtremes(['a', 'b', 'c', 'def']);
console.log(output)

output = removeExtremes(['where', 'is', 'the', 'longest', 'word']);
console.log(output)

// 의사코드
// 배열을 입력받는다
// 가장 짧은 문자열과 가장 긴 문자열을 변수로 할당할 준비를 한다
// 반복문으로 배열의 요소를 비교하여 문자열들을 할당한다
// 해당 문자열이 배열에 있는지 확인하고 그 배열을 잘라준다 >>> splice, indexOf