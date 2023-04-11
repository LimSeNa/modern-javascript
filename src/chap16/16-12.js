const person = {
    name: 'Lim'
}

console.log(Object.isFrozen(person)); // false

// person 객체 동결 -> 프로퍼트 추가, 삭제, 재정의, 쓰기 금지
Object.freeze(person);
console.log(Object.isFrozen(person)); // true

console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// {value: "Lim", writable: false, enumerable: false, configurable: false}

// 프로퍼티 추가 금지
// 무시됨(strict mode 에서는 에러)
person.age = 20;

// 프로퍼티 삭제 금지
// 무시됨(strict mode 에서는 에러)
delete person.name;

// 프로퍼티 값 갱신 금지
// 무시됨(strict mode 에서는 에러)
person.name = 'Min';
console.log(person); // {name: "Lim"}

// 프로퍼티 어트리뷰트 재정의 금지
Object.defineProperty(person,'name', { configurable: true });
// TypeError: Cannot redefine property: name