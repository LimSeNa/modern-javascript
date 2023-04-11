const person = {
    name: 'Lim'
}

console.log(Object.isSealed(person)); // false

// person 객체 밀봉 -> 프로퍼티 추가, 삭제, 재정의 금지
Object.seal(person);

console.log(Object.isSealed(person)); // true

console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// {value: "Lim", writable: true, enumerable: true, configurable: false}

// 프로퍼티 추가 금지
// 무시됨(strict mode 에서는 에러)
person.age = 20;

// 프로퍼티 삭제 금지
// 무시됨 (strict mode 에서는 에러)
delete person.name;

// 프로퍼티 값 갱신은 가능
person.name = 'Min';
console.log(person); // {name: "Min"}

// 프로퍼트 어트리뷰트 재정의 금지
Object.defineProperty(person, 'name', { configurable: true });
// TypeError: Cannot redefine property: name

