const target = 'AA BB 12,345';

// '0'~'9'가 한 번 이상 반복되는 문자열을 전역 검색
const regExp = /[0-9]+/g;

target.match(regExp); // ["12", "345"]