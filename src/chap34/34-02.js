const array = [1, 2, 3];

console.log(Symbol.iterator in array); // true

for (const item of array) {
    console.log(item); // 1 2 3
}

console.log([...array]); // [1, 2, 3]

const [a, ...rest] = array;
console.log(a, rest); // 1, [2, 3]