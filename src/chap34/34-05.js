// 배열은 이터러블
const array = [1, 2, 3];

// Symbol.iterator 메서드는 이터레이터를 반환
const iterator = array[Symbol.iterator]();

// 이터레이터는 next 메서드를 갖음
console.log('next' in iterator); // true