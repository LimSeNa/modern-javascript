// 생성자 함수
function Circle(radius) {
    this.radius = radius;
    this.getArea = function () {
        return Math.PI * radius ** 2;
    };
}

// 인스턴스 생성
const circle1 = new Circle(1);
const circle2 = new Circle(2);

// 메서드는 하나만 생성하여 모든 인스턴스가 공유해서 사용하는 것이 바람직
console.log(circle1.getArea === circle2.getArea); // true

console.log(circle1.getArea()); // 3.141592653589793
console.log(circle2.getArea()); // 12.566370614359172