// 함수 선언문은 표현식이 아닌 문이므로 변수 할당할 수 없음
// 하지만 변수 선언문이 변수에 할당되는 것처럼 보임
var add = function add(x, y) {
    return x + y;
};

console.log(add(2, 5)); // 7

