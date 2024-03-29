// 이터러블이면서 이터레이터인 객체를 반환하는 함수
const fibonacciFunc = function (max) {
    let [pre, cur] = [0, 1];

    return {
        [Symbol.iterator]() {return this;},
        next() {
            [pre, cur] = [cur, pre + cur];
            return {value: cur, done: cur >= max};
        }
    };
};

// iter는 이터러블이면서 이터레이터
let iter = fibonacciFunc(10);

for (const num of iter) {
    console.log(num); // 1 2 3 5 8
}

iter = fibonacciFunc(10);

console.log(iter.next()); // { value: 1, done: false }
console.log(iter.next()); // { value: 2, done: false }
console.log(iter.next()); // { value: 3, done: false }
console.log(iter.next()); // { value: 5, done: true }