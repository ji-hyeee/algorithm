function convertScoreToGrade(score) {
    return (score > 100 || score < 0) ? 'INVALID SCORE'
        : (score >= 90) ? 'A'
            : (score >= 80) ? 'B'
                : (score >= 70) ? 'C'
                    : (score >= 60) ? 'D'
                        : 'F'
}

let output = convertScoreToGrade(91);
console.log(output); // --> 'A'
