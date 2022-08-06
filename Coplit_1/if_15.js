function or(expression1, expression2) {
    // TODO: 여기에 코드를 작성합니다.
    return (expression1 === true && expression2 === true) ? true
        : (!expression1 === true && expression2 === true) ? true
            : (expression1 === true && !expression2 === true) ? true
                : false
}

let output = or(true, false);
console.log(output); // --> true;