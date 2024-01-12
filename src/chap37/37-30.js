const map = new Map([['key1', 'value1'], ['key2', 'value2']]);

console.log(Object.getOwnPropertyDescriptor(Map.prototype, 'size'));
// {set: undefined, enumerable: fasle, configurable: true, get: f}

map.size = 10;
console.log(size); // 3