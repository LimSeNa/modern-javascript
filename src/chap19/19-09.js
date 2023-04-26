// obj는 프로토타입 체인의 종점이므로 Object.__proto__를 상속받을 수 없음
const obj = Object.create(null);

console.log(obj.__proto__); // undefined

// __proto__보다 Object.getPropertyOf 메서드를 사용하는 것이 좋음
console.log(Object.getPrototypeOf(obj)); // null