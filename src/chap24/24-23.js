// 요소가 3인 배열을 생성하고 배열의 인덱스를 반환하는 함수를 요소로 추가
// 배열의 요소로 추가된 함수들은 모두 클로저
const funcs = Array.from(new Array(3), (_, i) => () => i); // (3) [f, f, f]

// 배열의 요소로 추가된 함수들을 순차적으로 호출
funcs.forEach(f => console.log(f())); // 0 1 2