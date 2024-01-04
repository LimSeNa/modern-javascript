const [a, b, c = 3] = [1, 2];
console.log(a, b, c); // 1 2 3

// 기본값보다 할당된 값이 우선
const [e, f = 10, g = 3] = [1, 2];
console.log(e, f, g); // 1 2 3