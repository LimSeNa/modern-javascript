const target = 'A AA B BB Aa Bb AAA';

// 'A'가 2번 반복되는 문자열을 전역 검색
const regExp = /A{2}/g;

target.match(regExp); // ["AA", "AA"]