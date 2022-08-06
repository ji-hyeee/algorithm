function isEvenAndGreaterThanTen(num) {
    return (num > 10 && num % 2 === 0) ? true : false;
}

let output = isEvenAndGreaterThanTen(13);
console.log(output); // --> false