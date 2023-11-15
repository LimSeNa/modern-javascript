const str = 'Hello world';

str.endsWith('ld'); // true
str.endsWith('x'); // false

// 문자열 str의 처음부터 5자리까지가 'lo'로 끝나는지 확인
str.endsWith('lo', 5); // true