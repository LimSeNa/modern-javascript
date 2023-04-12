function foo() {}

// 일반적인 함수로서 호출 : [[Call]] 이 호출 됨
foo();

// 생성자 함수로서 호출 : [[Constructor]] 가 호출 됨
new foo();