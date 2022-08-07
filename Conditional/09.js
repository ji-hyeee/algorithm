function daysInMonth(month) {
    // TODO: 여기에 코드를 작성합니다.
    if (month === 2) { return 28 }
    if (month === 4 || month === 6 || month === 9 || month === 11) { return 30 }
    return 31;
}

let output = daysInMonth(1);
console.log(output); // --> 31

output = daysInMonth(5);
console.log(output); // --> 31

output = daysInMonth(2);
console.log(output); // --> 28