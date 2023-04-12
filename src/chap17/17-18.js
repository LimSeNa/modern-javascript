// 생성자 함수
function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * radius;
    };
}

// new 연산자 없이 생성자 함수를 호출 -> 일반 함수로서 동작
const circle = Circle(5);

console.log(circle); // undefined

// 일반 함수 내부의 this 는 전역 객체의 window 를 가리킴
console.log(radius); // 5
console.log(getDiameter()); // 10

circle.getDiameter(); // TypeError: Cannot read property 'getDiameter' of undefined