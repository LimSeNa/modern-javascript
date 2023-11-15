const str = 'Hello World';

str.substring(1, 4); // ell

str.substring(1); // ello World

// 두 인수는 교환됨
str.substring(4, 1); // ell

// 0으로 취급
str.substring(-2); // Hello World

// 문자열의 길이로 취급
str.substring(1, 100); // ello World
str.substring(20); // ''