// 객체 리터럴에 의한 객체 생성  방식의 문제점
const circle1 =  {
    radius: 5,
    getDiameter() {
        return 2 * this.radius;
    }
};

const circle2 = {
    radius: 10,
    getDiameter() {
        return 2 * this.radius;
    }
};

console.log(circle2.getDiameter()); // 20