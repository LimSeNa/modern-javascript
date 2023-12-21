// 무한 이터러블을 생성하는 함수
const fibonacciFunc = function () {
    let [pre, cur] = [0, 1];

    return {
        [Symbol.iterator]() {return this;},
        next() {
            [pre, cur] = [cur, pre + cur];
            return {value: cur}; // 무한을 구현해야 하므로 done 프로퍼티 생략
        }
    };
};

for (const num of fibonacciFunc()) {
    if (num > 10000) break;
    console.log(num); // 1 2 3 5 8 ... 4181 6765
}

const [f1, f2, f3] = fibonacciFunc();
console.log(f1, f2, f3); // 1 2 3