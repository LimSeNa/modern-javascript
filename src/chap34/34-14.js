// 피보나치 수열을 구현한 사용자 정의 이터러블을 반환하는 함수
const fibonacciFunc = function (max) {
    let [pre, cur] = [0, 1];

    // Symbol.iterator 메서드를 구현한 이터러블을 반환
    return {
        [Symbol.iterator]() {
            return {
                next() {
                    [pre, cur] = [cur, pre + cur];
                    return {value: cur, done: cur >= max};
                }
            };
        }
    };
};

for (const num of fibonacciFunc(10)) {
    console.log(num); // 1 2 3 5 8
}