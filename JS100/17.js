// 문제 17: 놀이기구 키 제한

// 입력으로 키가 주어지면
// 키가 150이 넘으면 YES를 틀리면 NO를 출력하는 프로그램을 작성하세요

const high = (num) => {
    if (num >= 150) {
        console.log("YES")
    }
    else { console.log("NO") }
}

high(149)