const set = new Set();

console.log(NaN === NaN); // false
console.log(0 === -0); // true

set.add(NaN).add(NaN);
console.log(set); // Set(1) {NaN}

set.add(0).add(-0);
console.log(set); // Set(2) {NaN, 0}