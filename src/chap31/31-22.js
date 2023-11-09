const target = 'A AA BB ZZ Aa Bb';

// 'A'~'Z'가 한 번 이상 반복되는 문자열을 전역 검색
const regExp = /[A-Z]+/g;

target.match(regExp); // ["A", "AA", "BB", "ZZ", "A", "B"]