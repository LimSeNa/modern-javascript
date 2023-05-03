function Foo() {}

// 프로토타입 메서드
// this를 참조하지 않는 프로포타입 메서드는 정적 메서드로 변경하여도 동일한 효과를 얻을 수 있음
Foo.prototype.x = function () {
    console.log('x');
};

const foo = new Foo();
foo.x(); // x
         // 프로토타입 메서드를 호출하려면 인스턴스르 생성해야 함

// 정적 메서드
Foo.x = function () {
    console.log('x');
};
Foo.x(); // x
         // 정적 메서드는 인스턴스를 사용하지 않아도 호출할 수 있음