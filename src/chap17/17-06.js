function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

const circle3 = Circle(15);

// 일반 함수로서 호출된 Circle 은 반환문이 없으므로 암묵적으로 undefined 를 반환
console.log(circle3); // undefined

// 일반 함수로서 호출된 Circle 내의 this 는 전역 객체를 가리킴
console.log(radius); // 15