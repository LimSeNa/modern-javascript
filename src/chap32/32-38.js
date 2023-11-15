const str = 'How are you doing?';

// 공백으로 구분하여 배열로 반환
str.split(' '); // ['How', 'are', 'you', 'doing?']

// \s는 여러 가지 공백 문자를 의미
str.split(/\s/); // ['How', 'are', 'you', 'doing?']

// 인수로 빈 문자열 전달 -> 각 문자를 모두 분리
str.split(''); // ['H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', ' ', 'd', 'o', 'i', 'n', 'g', '?']

console.log(a);

// 인수 생략 -> 문자열 전체를 단일 요소로 하는 배열 반환
// str.split(); // ['How are you doing?']