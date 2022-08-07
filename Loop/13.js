function replaceAll(str, from, to) {
    // TODO: 여기에 코드를 작성합니다.
    let result = '';

    for (let i of str) {
        if (i === from) {
            result = result + to
        }
        else {
            result = result + i
        }
    }
    return result;
}

let output = replaceAll('loop', 'o', 'e');
console.log(output); // --> 'leep'

  // 문자열 순회
  // 단어 찾기
  // 단어 바꾸기
  // 바뀐 단어로 새롭게 출력