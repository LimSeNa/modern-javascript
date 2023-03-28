var person = {
    name: 'Lim'
};

// 참조 값을 복사(얕은 복사). copy와 person은 동일한 참조 값을 갖음
var copy = person;

// copy와 person은 동일한 객체를 가리킴
console.log(person === copy); // true

// copy를 통해 객체 변경
copy.name = 'Min';

// person을 통해 객체 변경
person.address = 'Seoul';

// copy와 person은 동일한 객체를 가리키므로 어느 한쪽에서 변경하면 서로 영향을 주고받음
console.log(person); // {name: "Min", address: "Seoul"}
console.log(copy); // {name: "Min", address: "Seoul"}