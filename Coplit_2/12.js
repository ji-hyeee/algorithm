function findBugInApples(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let width, height;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf('B') !== -1) {
            width = i;
            height = arr[i].indexOf('B');
        }
    }

    return [width, height];
}

let output = findBugInApples([['A'], ['B']]);
console.log(output);

output = findBugInApples([
    ['A', 'A', 'A', 'A', 'A'],
    ['A', 'B', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'A'],
    ['A', 'A', 'A', 'A', 'A'],
]);
console.log(output);