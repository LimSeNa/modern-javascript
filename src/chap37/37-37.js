const lee = {name: 'lee'};
const kim = {name: 'kim'};

const map = new Map([[lee, 'developer'], [kim, 'designer']]);

console.log(map.has(lee)); // true
console.log(map.has('key')); // false