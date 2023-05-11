// var 키워드로 선언한 전역 변수
var foo = 1;
console.log(window.foo); // 1

// 선언하지 않은 변수에 값을 할당한 암묵적 전역
bar = 2;
console.log(window.bar); // 2

// 전역 함수
function baz() { return 3 };
console.log(window.baz()); // 3