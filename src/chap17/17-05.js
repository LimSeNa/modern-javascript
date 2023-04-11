// 함수는 다양한 방식으로 호출될 수 있음
function foo() {
    console.log(this);
}

// 일반적인 함수로서 호출
foo(); // window

// 메서드로서 호출
const obj = { foo };
obj.foo(); // obj

// 생성자 함수로서 호출
const inst = new foo(); // inst