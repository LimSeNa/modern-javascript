function Person(name) {
    this.name = name;
}

const me = new Person('Lee');

// 프로토타입으로 교체할 객체
const parent = {
    sayHello() {
        console.log(`Hi! My name is ${this.name}!`);
    }
};

// ① me 객체의 프로토타입을 parent 객체로 교체
Object.setPrototypeOf(me, parent); // me.__proto__ = parent; 와 동일하게 동작

me.sayHello(); // Hi! My name is Lee!

// 프로토타입을 교체하면 constructor 프로퍼티와 생성자 함수 간의 연결이 파괴됨
console.log(me.constructor === Person); // false

// 프로토타입 체인을 따라 Object.prototype의 constructor 프로퍼티가 검색됨
console.log(me.constructor === Object); // true