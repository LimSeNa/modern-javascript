const person = {
    name: 'Lim',
    address: { city: 'Seoul' }
}

// 얕은 객체 동결
Object.freeze(person);

// 직속 프로퍼티만 동결, 중첩 객체까지 동결하지 못함
console.log(Object.isFrozen(person)); // true
console.log(Object.isFrozen(person.address)); // false

person.address.city = 'Daejeon';
console.log(person); // {name: "Lim", address: {city: "Daejeon"}}