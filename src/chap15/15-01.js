var x = 1;
var y = 1;

// 초기화문이 있는 변수 선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작
var x = 100;
// 초기화문이 없는 변순 선언문은 무시됨
var y;

console.log(x); // 100
console.log(y); // 1