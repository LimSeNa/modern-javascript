// 문자열이나 심벌 값이 아닌 프로퍼티 키 -> 문자열로 암묵적 타입 변환
var foo = {
    0: 1,
    1: 2,
    2: 3
};

console.log(foo); // {0: 1, 1: 2, 2: 3}음