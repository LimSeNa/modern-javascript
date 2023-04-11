const person = {};

// 데이터 프로퍼티 정의
Object.defineProperty(person, 'firstName', {
    value: 'Sena',
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperty(person, 'lastName', {
    value: 'Lim'
});

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log('firstName', descriptor);
// firstName {value: "Sena", writable: true, enumerable: true, configurable: true}

descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);
// lastName {value: "Lim", writable: false, enumerable: false, configurable: false}
// 디스크립터 객체의 프로퍼티를 누락시키면 undefined, false 가 기본값

console.log(Object.keys(person));
// ["firstName"]
// [[Enumerable]]의 값이 false 인 경우, 열거되지 않음

person.lastName = 'Kim';
delete person.lastName;
// [[Writable]], [[Configurable]]의 값이 false 이므로 변경할 수 없고 삭제할 수 없음
// 에러는 발생하지 않고 무시됨

descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);
// lastName {value: "Lim", writable: false, enumerable: false, configurable: false}


// 접근자 프로퍼티 정의
Object.defineProperty(person, 'fullName', {
    // getter 함수
    get() {
        return `${this.firstName}, ${this.lastName}`;
    },
    // setter 함수
    set(name) {
        [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable: true,
    configurable: true
});

descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log('fullName', descriptor);
// fullName {get: f, set: f, enumerable: true, configurable: true}

person.fullName = 'Jejun Min';
console.log(person);
// {firstName: "Jejun", lastName: "Min"}
