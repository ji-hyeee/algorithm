function countCharacter(str, letter) {
    // TODO: 여기에 코드를 작성합니다.
    let count = 0;

    for (let i of str) {
        if (i === letter) {
            count++
        }
    }

    return count;
}


let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3

  // for
  // '' === 0