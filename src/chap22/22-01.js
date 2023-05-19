const circle = {
    radius: 5, // 프로퍼티 : 객체 고유의 상태 데이터
    getDiameter() { // 메서드 : 상태 데이터를 참조하고 조작하는 동작
        // 이 메서드가 자신이 속한 객체의 프로퍼티나 다른 메서드를 참조하려면
        // 자신이 속한 객체인 circle을 참조할 수 있어야 함
        return 2 * circle.radius;
    }
};

console.log(circle.getDiameter()); // 10