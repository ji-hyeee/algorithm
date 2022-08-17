const largestProductOfThree = function (arr) {
    // TODO: 여기에 코드를 작성합니다.
    let sorted = arr.sort((a, b) => b - a);
    let [x, y, z] = sorted;
    console.log([x, y, z])
    let [smallY, smallZ] = sorted.reverse();
    console.log([x, smallY, smallZ])
    return Math.max(x * y * z, x * smallY * smallZ);
};

let output = largestProductOfThree([2, 1, 3, 7]);
console.log(output); // --> 42 (= 2 * 3 * 7)

output = largestProductOfThree([-1, 2, -5, 7]);
console.log(output); // --> 35 (= -1 * -5 * 7)

// 요소 하나씩 다 더해서 실패
// const sortArr = arr.sort((a, b) => a - b)
// let result = sortArr[0]
// console.log(sortArr)

// for (let i = 1; i < sortArr.length; i++) {
//     if (i > 0) {
//         result = result * sortArr[i]
//     }
// }
// return result;

// const sortArr = arr.sort((a, b) => a - b)
// console.log(sortArr)

// console.log(sortArr[0] * sortArr[1])
// console.log(sortArr[sortArr.length - 1] * sortArr[sortArr.length - 2])

// if (sortArr[0] * sortArr[1] > sortArr[sortArr.length - 1] * sortArr[sortArr.length - 2]) {
//     return sortArr[0] * sortArr[1] * sortArr[sortArr.length - 1]
// }
// return sortArr.slice(1).reduce((acc, cur) => acc * cur)