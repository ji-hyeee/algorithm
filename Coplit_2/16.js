function isIsogram(str) {
    // TODO: 여기에 코드를 작성합니다.
    let arr = str.toUpperCase().split('')
    // console.log(arr)

    let newStr = [...new Set(arr)];
    // console.log(newStr)

    if (arr.length === newStr.length) { return true }

    return false
}

let output = isIsogram('aba');
console.log(output); // false

output = isIsogram('Dermatoglyphics');
console.log(output); // true

output = isIsogram('moOse');
console.log(output); // false