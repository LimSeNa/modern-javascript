// 함수를 반환하는 고차 함수
const counter = (function () {
    // 자유 변수
    let counter = 0;

    // 클로저를 반환
    return function (aux) {
        counter = aux(counter);
        return counter;
    };
}());

// 보조 함수
function increase(n) {
    return ++n;
}

function decrease(n) {
    return --n;
}

// 보조 함수를 전달하여 호출
console.log(counter(increase)); // 1
console.log(counter(increase)); // 2

console.log(counter(decrease)); // 1
console.log(counter(decrease)); // 0