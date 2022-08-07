function characterAndNumber(word) {
    // TODO: 여기에 코드를 작성합니다.
    let result = '';
    let num = 0;

    for (let i of word) {
        result = result + i + num;
        num++
    }

    return result;
}

let output = characterAndNumber('hello');
console.log(output); // --> 'h0e1l2l3o4'

output = characterAndNumber('cup');
console.log(output); // --> 'c0u1p2'

  // 문자열을 순회한다
  // 단어의 인덱스 값을 단어 뒤에 붙인다
  // 바뀐 문자열을 출력한다