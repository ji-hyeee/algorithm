function movingStuff(stuff, limit) {
    // TODO: 여기에 코드를 작성합니다.

    // 카운트
    let count = 0;

    // 정렬
    let stuffSort = stuff.sort((a, b) => a - b);

    // 반복문 >>> for문에서 while문으로 교체
    while (0 < stuffSort.length) {

        // 첫번째와 마지막을 더한 값이 제한보다 작거나 같으면
        if (stuffSort[0] + stuffSort[stuffSort.length - 1] <= limit) {
            // 첫번째 요소 제거
            stuffSort.shift();
        }
        // 아니라면 마지막 요소 제거
        stuffSort.pop();
        count++;
    }
    return count;
}

let output = movingStuff([70, 50, 80, 50], 100);
console.log(output); // 3

output = movingStuff([60, 80, 120, 90, 130], 140);
console.log(output); // 4

// 반복문으로 정렬된 배열 순회
// 첫번째 인덱스 + 두번째 인덱스 <= limit
// 50 + 50 <= 100
// 70 + 80 <= 100 / 70
// 80

// 50 + 80 > 100
// 80을 자르기

// 50 + 70 > 100
// 70 자르기

// 첫번째 인덱스를 자른다 >>> arr.pop

// let first = stuffSort.pop()
// console.log(first)
// console.log(stuffSort)

// 조건
// 인덱스[0] + 마지막인덱스 > = 100
// 마지막 요소 제거