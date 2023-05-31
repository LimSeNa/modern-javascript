// 함수를 인수로 전달받고 함수를 반환하는 고차 함수
function makeCounter(aux) {
    let counter = 0;

    // 클로저 반환
    return function () {
        counter = aux(counter);
        return counter;
    };
}

// 보조 함수
function increase(n) {
    return ++n;
}

// 보조 함수
function decrease(n) {
    return --n;
}

const increaser = makeCounter(increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

const decreaser = makeCounter(decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2