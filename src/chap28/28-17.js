// 인수가 정수이면 true를 반환
Number.isInteger(0); // true
Number.isInteger(123); // true
Number.isInteger(-123); // true

// 정수가 아님
Number.isInteger(0.5); // false
Number.isInteger(Infinity); // false
Number.isInteger(-Infinity); // false

// 숫자로 암묵적 타입 변환하지 않음
Number.isInteger('123'); // false
Number.isInteger(false); // false