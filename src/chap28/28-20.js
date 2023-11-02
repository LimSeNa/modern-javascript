// 안전한 정수
Number.isSafeInteger(0); // true
Number.isSafeInteger(1000000000000000); // true

// 안전하지 않음
Number.isSafeInteger(10000000000000001); // false

// 정수가 아님
Number.isSafeInteger(0.5); // false

// 암묵적 타입 변환하지 않음
Number.isSafeInteger('123'); // false
Number.isSafeInteger(false); // false
Number.isSafeInteger(Infinity); // false