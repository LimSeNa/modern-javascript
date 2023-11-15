const str = 'Hello World';

str.indexOf('l'); // 2

str.indexOf('or'); // 7

str.indexOf('x'); // -1

str.indexOf('l', 3); // 3

if (str.indexOf('Hello') !== -1) {
    // 문자열 str에 'Hello'가 포함되어 있는 경우에 처리할 내용
}

if (str.includes('Hello')) {
    // 문자열 str에 'Hello'가 포함되어 있는 경우에 처리할 내용
}