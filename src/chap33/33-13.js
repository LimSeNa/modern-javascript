const obj = {
    [Symbol.for('mySymbol')]: 1
};

for (const key in obj) {
    console.log(key); // 아무것도 출력되지 않음
}

console.log(Object.keys(obj)); // []
console.log(Object.getOwnPropertyNames(obj)); // []