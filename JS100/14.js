// 문제 14: 3의 배수인가요?

// 입출력
// 입력 : 3
// 출력: 짝

// 입력 : 2
// 출력 : 2

const multiples = (num) => {
   if (num % 3 === 0) {
      console.log('짝');
   } else {
      console.log(num);
   }
}

multiples(6)