// 프로토타입이 null인 객체를 생성
const obj = Object.create(null);
obj.a = 1;

// Object.prototype의 빌트인 메서드는 객체로 직접 호출하지 않음
console.log(Object.prototype.hasOwnProperty.call(obj, 'a')); // true