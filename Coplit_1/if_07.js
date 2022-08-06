function fizzBuzz(num) {
    // TODO: 여기에 코드를 작성합니다.
    if (num % 3 === 0 && num % 5 === 0) { return 'FizzBuzz' }
    if (num % 3 === 0) { return 'Fizz' }
    if (num % 5 === 0) { return 'Buzz' }
    return 'No FizzBuzz'
}

let output = fizzBuzz(3);
console.log(output); // --> 'Fizz'

output = fizzBuzz(5);
console.log(output); // --> 'Buzz'

output = fizzBuzz(15);
console.log(output); // --> 'FizzBuzz'

output = fizzBuzz(7);
console.log(output); // --> 'No FizzBuzz'