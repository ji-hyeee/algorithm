function superIncreasing(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let sum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (sum >= arr[i]) {
      return false;
    }
    sum = sum + arr[i]
  }
  return true;
}

let output = superIncreasing([1, 3, 6, 13, 54]);
console.log(output); // --> true

output = superIncreasing([1, 3, 5, 9]);
console.log(output); // --> false

// 처음 비교할 요소는 arr[0] < arr[1] >>> true
// 다음 arr[0] + arr[1] < arr[2]