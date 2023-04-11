// 생성자 함수
function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * radius;
    };
}

// 인스턴스 생성
const circle1 = new Circle(5);