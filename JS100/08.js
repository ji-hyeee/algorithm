// 문제 8: 객체의 키 이름 중복
// 자바스크립트 객체를 다음과 같이 만들었다.
// 출력값을 입력하시오. (출력값은 공백을 넣지 않습니다.)

var d = {
    'height': 180,
    'weight': 78,
    'weight': 84,
    'temperature': 36,
    'eyesight': 1
}

console.log(d['weight'])

// 78이 아닐까?
// ㅇㄴ 84 였음 왜냐면 코드는 위에서 아래로 흐르므로
// 변수에 값을 재할당 하는 것처럼 같은 키라면 마지막 값이 할당되는 군 !