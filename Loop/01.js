function findTheBug(word) {
    // TODO: 여기에 코드를 작성합니다.
    for (let i of word) {
        if (i === '#') {
            return i;
        }
    }
}

let output = findTheBug('wo#rd');
console.log(output); // --> 2

output = findTheBug('#hello');
console.log(output); // --> 0

output = findTheBug('bug');
console.log(output); // --> undefined