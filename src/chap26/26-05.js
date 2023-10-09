const obj = {
    x: 1,
    foo() { return this.x; }, // foo는 메서드
    bar: function() { return this.x; }, // bar에 바인딩된 함수는 일반 함수
};

console.log(obj.foo()); // 1
console.log(obj.bar()); // 1