const person = {
    // 데이터 프로퍼티
    firstName: 'Sena',
    lastName: 'Lim',

    // 접근자 함수로 구성된 접근자 프로퍼티
    // getter 함수
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    // setter 함수
    set fullName(name) {
        // 배열 디스트럭처링 할당
        [this.firstName, this.lastName] = name.split('');
    }
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(person.firstName + ' ' + person.lastName); // Sena Lim

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출
person.fullName = "Jejun Min";
console.log(person); // {firstName: "Jejun", lastName: "Min"}

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출
console.log(person.fullName); // Jejun Min

// firstName은 데이터 프로퍼티이므로
// [[Value]], [[Writable]], [[Enumerable]], [[Configurable]] 프로퍼티 어트리뷰트를 갖음
let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(descriptor); // {value: "Jejun", writable:  true, enumerable: true, configurable: true}

// fullName은 접근자 프로퍼티이므로
// [[Get]], [[Set]], [[Enumerable]], [[Configurable]] 프로퍼티 어트리뷰트를 갖음
descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log(descriptor); // {get: f, set: f, enumerable: true, configurable: true}