// 기명 함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석
// 함수 선언문에서는 함수 이름 생략X
function foo() {
    console.log('foo');
}

foo(); // foo

// 함수 리터럴을 피연산자로 사용하면 함수 리터럴 표현식으로 해석
// 함수 리터럴에서는 함수 이름 생략O
(function bar() {
    console.log('bar');
});

bar(); // ReferenceError: bar is not defined