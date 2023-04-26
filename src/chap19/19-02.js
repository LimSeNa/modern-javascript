const circle = {
    radius: 5, // 반지름
    getDiameter() { // 원의 지름
        return 2 * this.radius;
    },
    getPerimeter() { // 원의 둘레
        return 2 * Math.PI * this.radius;
    },
    getArea() { // 원의 넓이
        return Math.PI * this.radius ** 2;
    }
};

console.log(circle); // {radius: 5, getDiatmeter: f, getPerimeter: f, getArea: f}

console.log(circle.getDiameter()); // 10
console.log(circle.getPerimeter()); // 31.41592653589793
console.log(circle.getArea()); // 78.53981633974483