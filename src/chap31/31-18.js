const target = 'color colour';

// 'colo' 다음 'u'가 최대 한 번 이상 반복되고 'r'이 이어지는 문자열을 전역 검색
const regExp = /colou?r/g;

target.match(regExp); // ["color", "colour"]