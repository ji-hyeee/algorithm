function findMatryoshka(matryoshka, size) {
    // TODO: 여기에 코드를 작성합니다.
    // 빈 객체의 경우 false 리턴
    // console.log(matryoshka)
    // console.log(matryoshka.matryoshka)
    // console.log(matryoshka.size)
    // console.log(matryoshka.matryoshka.size)

    if (size === matryoshka.size) {
        return true;
    }

    if (matryoshka.matryoshka === null || matryoshka.size === undefined) {
        return false;
    }

    return findMatryoshka(matryoshka.matryoshka, size)
}

// false 가 나와서 조건문 순서를 바꿨다
// 차례대로 { size: 10, matryoshka: null }, 10을(를) 입력받은 경우, true를 리턴해야 합니다
// 차례대로 { size: 10, matryoshka: { size: 3, matryoshka: null }}, 3을(를) 입력받은 경우, true를 리턴해야 합니다

const matryoshka = {
    size: 10,
    matryoshka: {
        size: 9,
        matryoshka: null,
    },
};

let output = findMatryoshka(matryoshka, 10);
console.log(output); // --> true

output = findMatryoshka(matryoshka, 8);
console.log(output); // --> false