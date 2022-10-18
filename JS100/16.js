// 문제 16: 로꾸거

// 입출력
// 입력 :거꾸로
// 출력 :로꾸거

const reverse = (string) => {
    const slice = string.split('');
    const reverse = slice.reverse();
    const join = reverse.join('');
    console.log(join)
}

reverse('🎶말해말거꾸로거꾸로거꾸로')
// 의사코드
// reverse >>> 배열 메소드
// 문자열 잘라버려
// 배열을 다시 문자열로 >>> '' 하면 배열 쉼표 사라짐 ~