const person = {
    name: 'Lee',
    foo(callback) {
        // bind 메서드로 callback 함수 내부의 this 바인딩을 전달
        setTimeout(callback.bind(this), 100);
    }
};

person.foo(function () {
    console.log(`Hi! My name is ${this.name}.`); // Hi! My name is Lee.
});