var x = 10; // 전역 변수

function foo() {
    // 선언하지 않은 식별자에게 값을 할당
    y = 20;
    console.log(x + y); // 30
}
foo(); // 30

console.log(window.x); // 10
console.log(window.y); // 20

delete x; // 전역 변수는 삭제되지 않음
delete  y; // 프로퍼티는 삭제됨

console.log(window.x); // 10
console.log(window.y); // undefined