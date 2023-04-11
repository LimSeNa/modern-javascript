function deepFreeze(target) {
    if (target && typeof target === 'object' && !Object.isFrozen(target)) {
        Object.freeze(target);
        Object.keys(target).forEach(deepFreeze(target[key]));
    }
    return target;
}

const person = {
    name: 'Lim',
    address: { city: 'Seoul' }
}

// 깊은 객체 동결
deepFreeze(person);
console.log(Object.isFrozen(person)); // true
console.log(Object.isFrozen(person.address)); // true

person.address.city = 'Deajeon';
console.log(person); // {name: "Lim", address: {city: "Seoul"}}
