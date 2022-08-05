function readVertically(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let length = arr.map(e => e.length)
    let long = Math.max(...length)
    let result = ''

    for (let i = 0; i < long; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j][i] === undefined) {
                result = result + ''
            } else {
                result = result + arr[j][i]
            }
        }
    }
    return result;
}

let input = ['hello', 'wolrd',];
let output = readVertically(input);
console.log(output); // --> 'hweolllrod'

input = ['hi', 'wolrd',];
output = readVertically(input);
console.log(output); // --> 'hwiolrd'

// 첫번째 배열 요소의 첫번째 문자열
// arr[0][0] + arr[1][0]
// arr[0][1] + arr[1][1]