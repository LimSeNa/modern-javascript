const obj = {a: 1, b: 2};

// 일반 객체는 Symbol.iterator 메서드를 구현하거나 상속받지 않음
console.log(Symbol.iterator in obj); // false

for (const item of obj) {
    console.log(item); // TypeError: obj is not iterable
}

const [a, b] = obj; // TypeError: obj is not iterable