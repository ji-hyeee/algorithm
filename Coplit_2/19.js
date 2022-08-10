function decryptCaesarCipher(str, secret) {
    // TODO: 여기에 코드를 작성합니다.
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            result = result + ' ';
        } else {
            let findStr = alpha.indexOf(str[i]);
            let resultStr = findStr - secret;

            (resultStr < 0) ? resultStr = alpha.length + resultStr : resultStr
            // 26 + (-3)

            result = result + alpha[resultStr];
        }
    }
    return result;
}

let output = decryptCaesarCipher('khoor', 3);
console.log(output); // --> hello

output = decryptCaesarCipher('zruog', 3);
console.log(output); // --> world

output = decryptCaesarCipher('nzop delepd', 11);
console.log(output);
