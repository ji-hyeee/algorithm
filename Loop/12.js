function getMaxNumberFromString(str) {
    // TODO: 여기에 코드를 작성합니다.
    let result = 0;
  
    for (let i of str) {
      if (parseInt(i) > result) {
        result = parseInt(i);
      }
    }
    return `${result}`
  }
  
  let output = getMaxNumberFromString('53862');
  console.log(output); // --> '8'
  
  output = getMaxNumberFromString('4321');
  console.log(output); // --> '4'
  
  // for
  // str.split X
  // '' === 0
  
  // 통과못한 코드
  // function getMaxNumberFromString(str) {
  //   let result = 0;
  
  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i] <= str[i + 1]) {
  //       result = str[i + 1];
  //     }
  //   }
  //   return result;
  // }