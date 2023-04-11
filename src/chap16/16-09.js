const person = {};

Object.defineProperties(person, {
    // 데이터 프로퍼티 정의
    firstName: {
        value: 'Sena',
        writable: true,
        enumerable: true,
        configurable: true
    },
    lastName: {
        value: 'Lim',
        writable: true,
        enumerable: true,
        configurable: true
    },
    // 접근자 프로퍼티 정의
    fullName: {
        // getter 함수
        get() {
            return `${this.firstName} ${this.lastName}`;
        },
        // setter 함수
        set(name) {
            [this.firstName, this.lastName] = name.split(' ');
        },
        enumerable: true,
        configurable: true
    }
});

person.fullName = 'Jejun Min';
console.log(person);
// {firstName: "Jejun", lastName: "Min"}