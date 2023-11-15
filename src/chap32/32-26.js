const str = 'hello world';

str.substring(0, 5); // hello
str.slice(0, 5); // hello

str.substring(2); // llo world
str.slice(2); // llo world

// 0으로 취급
str.substring(-5); // hello world
// 뒤에서 5자리를 잘라내어 반환
str.slice(-5); // world