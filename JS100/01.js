// 문제 1: 배열의 삭제
// 다음 배열에서 400, 500을 삭제하는 code를 입력하세요.

var nums = [100, 200, 300, 400, 500];
const sliceNum = nums.slice(0, -2)
console.log(sliceNum)

// result 
// [100, 200, 300]