const set = new Set([1, 2, 3]);

// Set 객체는 Set.prototype의 Symbol.iterator 메서드를 상속받는 이터러블
console.log(Symbol.iterator in set); //  true

for (const value of set) {
    console.log(value); // 1 2 3
}

console.log([...set]); // [1, 2, 3]

const [a, ...reset] = set;
console.log(a, reset); // 1, [2, 3]