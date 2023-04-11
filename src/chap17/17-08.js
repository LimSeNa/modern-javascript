function Circle(radius) {
    // 1. 암묵적으로 인스턴스가 생성되고 this 에 바인딩 됨
    console.log(this); // Circle {}

    // 2. this 에 바인딩되어 있는 인스턴스를 초기화
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * radius;
    };

    // 3. 완성된 인스턴스가 바인딩된 this 가 암묵적으로 반환
}

// 인스턴스 생성
// Circle 생성자 함수는 암묵적으로 this 를 반환
const circle = new Circle(1);
console.log(circle); // Circle {radius: 1, getDiameter: f}