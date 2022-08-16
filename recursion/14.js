function unpackGiftbox(giftBox, wish) {
    // TODO: 여기에 코드를 작성합니다.
    // console.log(giftBox)
    // console.log(giftBox[2])
    // console.log(giftBox[2][0])

    const result = giftBox.reduce((acc, curr) => {
        if (curr === wish) {
            return true;
        } else if (Array.isArray(curr)) {
            return unpackGiftbox(curr, wish) || acc;
        } else {
            return acc;
        }
    }, false);

    return result;
}


const giftBox = ['macbook', 'mugcup', ['eyephone', 'postcard'], 'money'];

let output = unpackGiftbox(giftBox, 'iphone');
console.log(output); // --> false

output = unpackGiftbox(giftBox, 'postcard');
console.log(output); // --> true