// 문제 18: 평균 점수
// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요.
// 단, 소숫점 자리는 모두 버립니다.

// 입출력
// 입력: 20 30 40
// 출력: 30

const average = (num1, num2, num3) => {
    console.log(Math.floor((num1 + num2 + num3) / 3))
}

console.log(average(20, 30, 40))