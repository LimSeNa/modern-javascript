const person = {
    name: 'Lee',
    address: 'Seoul'
};

// in 연산자는 객체가 상속받은 모든 프로토타입의 프로퍼티를 확인
console.log('toString' in person); // true

// for ... in 문도 객체가 상속받은 모든 프로토타입의 프로퍼티를 열거
// 하지만, toString과 같은 Object.prototype의 프로퍼티가 열거되지 않음
for (const key in person) {
    console.log(key + ': ' + person[key]);
}
// name: Lee
// address: Seoul