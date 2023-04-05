// 런타임 이전에 선언 단계가 실행. 아직 변수가 초기화되지 않음.
// 초기화 이전에서는 변수를 참조할 수 없음
console.log(foo); // ReferenceError: foo is not defined

let foo; // 초기화 단계 실행
console.log(foo); // undefiend

foo = 1; // 할당 단계 실행
console.log(foo); // 1