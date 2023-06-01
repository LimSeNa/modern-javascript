function Person(name, age) {
    this.name = name;
    let _age = age;
}

// 프로토타입 메서드
Person.prototype.sayHi = function () {
    // Person 생성자 함수의 지역 변수 _age를 참조할 수 없음
    console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
};