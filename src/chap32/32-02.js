const strObj = new String('Lee');
console.log(strObj); // String {0: "L", "1: "e", 2: "e", length: 3, [[PrimitiveValue]]: "Lee"}

console.log(strObj[0]); // L

strObj[0] = 'S';
console.log(strObj); // 'Lee'