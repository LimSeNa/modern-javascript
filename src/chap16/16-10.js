const person = {
    name: 'Lim'
}

console.log(Object.isExtensible(person)); // true

// person 객체 확장 금지
Object.preventExtensions(person);
console.log(Object.isExtensible(person)); // false

// 프로퍼티 추가 금지
person.age = 20;
console.log(person); // {name: "Lim"}

// 프로퍼티 추가는 금지되지만 삭제는 가능
delete person.name;
console.log(person); // {}

// 프로퍼티 정의에 의한 프로퍼티 추가도 금지
Object.defineProperty(person, 'age', {value: 20});
// TypeError: Cannot define property age, object is not extensible체