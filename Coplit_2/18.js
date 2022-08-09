function numberSearch(str) {
    // TODO: 여기에 코드를 작성합니다.
    if (str.length === 0) {
        return 0
    }

    let arr = str.match(/[A-Z]/gi);
    // console.log(arr.length)

    let num = str.match(/[0-9]/g);
    // console.log(num)

    let sum = num.reduce((a, b) => Number(a) + Number(b));
    // console.log(sum)

    return Math.round(sum / arr.length)
}

let output = numberSearch('Hello6 ');
console.log(output); // --> 1

output = numberSearch('Hello6 9World 2,');
console.log(output); // --> 2

output = numberSearch('Hello6 9World 2, Nic8e D7ay!');
console.log(output); // --> 2

// 문자열 순회
// 단어가 숫자면 더한다 > 더해줄 변수
// 숫자와 공백을 제외한 문자열을 구한다 > 문자열만 넣어줄 변수
// 숫자 / 문자열길이
// 반올림해서 리턴한다