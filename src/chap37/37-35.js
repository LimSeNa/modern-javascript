const map = new Map();

const lee = {name: 'Lee'};
const kim = {name: 'Kim'};

// 객체도 키로 사용 가능
map.set(lee, 'developer').set(kim, 'designer');

console.log(map); // Map(2) { { name: 'Lee' } => 'developer', { name: 'Kim' } => 'designer' }
