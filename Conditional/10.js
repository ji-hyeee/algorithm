function followingDay(day) {
    // TODO: 여기에 코드를 작성합니다.
    return (day === '월요일') ? '화요일'
        : (day === '화요일') ? '수요일'
            : (day === '수요일') ? '목요일'
                : (day === '목요일') ? '금요일'
                    : (day === '금요일') ? '토요일'
                        : (day === '토요일') ? '일요일'
                            : (day === '일요일') ? '월요일'
                                : '올바른 요일이 아닙니다';
}

let output = followingDay('월요일');
console.log(output); // --> '화요일'

output = followingDay('일요일');
console.log(output); // --> '월요일'

output = followingDay('월');
console.log(output); // --> '올바른 요일이 아닙니다'

output = followingDay(100);
console.log(output); // --> '올바른 요일이 아닙니다'