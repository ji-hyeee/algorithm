function newChickenRecipe(stuffArr, choiceNum) {
    // 정규표현식 000
    let pattern = /000/;
    // console.log(pattern.test(stuffArr[2]))

    // 000 이 연속된 숫자이면 상한 재료라서 제외한다
    // 정규표현식 사용 + test 메소드로 000 제외
    let newArr = stuffArr.filter(e => !pattern.test(e))

    // 배열 순서를 (숫자)오름차순으로 정렬
    newArr = newArr.sort((a, b) => a - b)

    // 경우의 수 재귀로 반복
}



const output1 = newChickenRecipe([1, 10, 1000, 1111], 2);
console.log(output1);