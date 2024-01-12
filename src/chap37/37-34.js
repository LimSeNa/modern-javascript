const map = new Map();

console.log(NaN === NaN); // false
console.log(0 === -0); // true

map.set(NaN, 'value1').set(NaN, 'value2');
console.log(map); // Map(1) {NaN => 'value2'}

map.set(0, 'value1').set(-0, 'value2');
console.log(map); // Map(2) {NaN => 'value2', -0 => 'value2'}