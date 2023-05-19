function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
};

const me = new Person('Lee');

// getName 메서드를 호출한 객체는 me
console.log(me.getName()); // ① Lee

Person.prototype.name = 'Kim';

// getName 메서드를 호출한 객체는 Person.prototype
console.log(Person.prototype.getName()); // ② Kim