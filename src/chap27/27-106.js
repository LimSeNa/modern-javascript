const numbers = [1, 4, 9];

const roots = numbers.map(item => Math.sqrt(item)); // const roots = numbers.map(Math.sqrt);

// map 메서드는 새로운 배열을 반환
console.log(roots); // [1, 2, 3]

// map 메서든느 원본 배열을 변경하지 않음
console.log(numbers); // [1, 4, 9]