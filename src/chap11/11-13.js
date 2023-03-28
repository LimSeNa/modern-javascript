// 프로퍼티를 동적으로 추가, 값 갱신
var person = {
    name: 'Lim'
};

// 프로퍼티 값 갱신
person.name = 'Min';

// 프로퍼티 동적 생성
person.address = 'Seoul';

console.log(person); // {name: "Lim", address: "Seoul"}