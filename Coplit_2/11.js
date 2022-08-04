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

// // 의사코드
// 배열을 입력받는다
// 배열안에 있는 문자열의 길이를 비교한다 > 반복문 
// 가장 긴 문자열과 짧은 문자열을 변수에 할당한다
// 배열에서 해당 문자열이 속한 부분을 자른다