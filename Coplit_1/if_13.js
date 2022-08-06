function convertScoreToGradeWithPlusAndMinus(score) {
    // TODO: 여기에 코드를 작성합니다.
    let o = (score % 10 <= 2) ? '-'
        : (score % 10 >= 8) ? '+'
            : ''

    let s = (score >= 90) ? 'A'
        : (score >= 80) ? 'B'
            : (score >= 70) ? 'C'
                : (score >= 60) ? 'D'
                    : 'F'

    if (score > 100 || score < 0) { return 'INVALID SCORE' }
    if (score === 100) { return 'A+' }
    if (s !== 'F') { s = s + o; }
    return s;
}

// 나머지가 2이하 >>> '-'
// 나머지가 8이상 >>> '+'

let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'