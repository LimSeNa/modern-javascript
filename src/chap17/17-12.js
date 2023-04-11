function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * radius;
    };
    return 100;
}

const circle = new Circle(1);
console.log(circle); // Circle {radius: 1, getDiameter: f}