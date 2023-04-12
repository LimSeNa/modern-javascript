// 생성자 함수
function Circle(radius) {
    // 이 함수가 new 연산자와 함께 사용되지 않았다면 new.target 은 undefined
    if(!new.target) {
        // new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환
        return new Circle(radius);
    }
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * radius;
    };
}

// new 연산자 없이 생성자 함수를 호출하여도 new.target 을 통해 생성자 함수로서 호출
const circle = Circle(5);
console.log(circle.getDiameter()); // 10