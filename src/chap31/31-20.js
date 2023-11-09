const target = 'A AA B BB Aa Bb';

// 'A' 또는 'B'가 한 번 이상 반복되는 문자열을 전역 검색
const regExp = /A+|B+/g;

target.match(regExp); // ["A", "AA", "B", "BB", "A", "B"]