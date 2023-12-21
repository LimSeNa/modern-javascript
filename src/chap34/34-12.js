// 피보나치 수열을 구현한 사용자 정의 이터러블
const fibonacci = {
    // Symbol.iterator 메서드를 구현하여 이터레이션 프로토콜을 준수
    [Symbol.iterator]() {
        let [pre, cur] = [0, 1];
        const max = 10;

        // Symbol.iterator 메서드는 next 메서드를 소유한 이터레이터를 반환
        return {
            next() {
                // next 메서드는 이터레이터 리절트 객체를 반환
                [pre, cur] = [cur, pre + cur];
                return {value: cur, done: cur >= max};
            }
        };
    }
};

// 이터러블인 fibonacci 객체를 순회할 때마다 next 메서드가 호출
// 이터러블은 for ... of 문의 대상이 될 수 있음
for (const num of fibonacci) {
    console.log(num); // 1 2 3 5 8
}

// 이터러블은 스프레드 문법의 대상이 될 수 있음
const arr = [...fibonacci];
console.log(arr); // [1, 2, 3, 5, 8]

// 이터러블은 배열 디스트럭처링 할당의 대상이 될 수 있음
const [first, second, ...rest] = fibonacci;
console.log(first, second, rest); // 1 2 [3, 5, 8]