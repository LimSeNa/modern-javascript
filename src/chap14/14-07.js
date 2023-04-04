var Counter = (function () {
    var num = 0; // private 변수 : 외부에서 접근할 수 없고 내부에서만 사용

    return {
        increase() {
            return ++num;
        },
        decrease() {
            return --num;
        }
    };
}());

console.log(Counter.num); // undefined
console.log(Counter.increase()); // 1
console.log(Counter.increase()); // 2
console.log(Counter.decrease()); // 1
console.log(Counter.decrease()); // 0