// Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(1.5); // Number {1.5}

// toFixed는 Number.prototype의 프로토타입 메서드
console.log(numObj.toFixed()); // 2

// isInteger는 Number의 정적 메서드
console.log(Number.isInteger(0.5)); // false