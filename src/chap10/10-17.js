// 프로퍼티 동적 생성
var person = {
    name: 'Lim'
};

// person 객체에는 age 프로퍼티가 존재하지 않음
// person 객체에 age 프로퍼티가 동적으로 생성되고 값이 할당
person.age = 20;

console.log(person); // {name: "Lim", age: 20}