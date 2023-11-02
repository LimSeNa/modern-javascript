// 인수를 숫자로 암묵적 타입 변환하지 않음
Number.isFinite(null); // false

// 인수를 숫자로 암묵적 타입 변환
// null -> 0
isFinite(null); // true