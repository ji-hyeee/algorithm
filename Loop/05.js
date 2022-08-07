function repeatString(str, num) {
    // TODO: 여기에 코드를 작성합니다.
    let repeat = '';

    for (let i = 1; i <= num; i++) {
        repeat = repeat + str;
    }
    return repeat;
}

let output = repeatString('code', 3);
console.log(output); // --> "codecodecode"

// use for loop
// 0 === ''