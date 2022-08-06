function isOldEnoughToDrink(age) {
    // TODO: 여기에 코드를 작성합니다.
    return (age >= 18) ? true : false;
}

let output = isOldEnoughToDrink(18);
console.log(output); // --> true

output = isOldEnoughToDrink(17);
console.log(output); // --> false