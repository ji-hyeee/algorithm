function partTimeJob(k) {
    // TODO: 여기에 코드를 작성하세요.

    // 거스름돈 개수 변수 선언
    let count = 0;

    // 동전 배열 선언
    let coin = [1, 5, 10, 50, 100, 500]
    // let coin = [500, 100, 50, 10, 5, 1]

    // 반복문 순회
    for (let i = coin.length - 1; i >= 0; i--) {
        // 몫 = 8
        count += parseInt(k / coin[i]);
        // 나머지 = 0
        k = k % coin[i]
    }
    return count;
}

// 4000원을 받았을 때 500원짜리 동전 8개를 반환합니다.
const output1 = partTimeJob(4000);
console.log(output1); // --> 8

// 4972원을 받았을 때 500원짜리 동전 9개, 100원짜리 동전 4개, 50원짜리 동전 1개, 10원짜리 동전 2개, 1원짜리 동전 2개, 총 18개를 반환합니다.
output2 = partTimeJob(4972);
console.log(output2); // --> 18