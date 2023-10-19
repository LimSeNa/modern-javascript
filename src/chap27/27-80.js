const arr = new Array(3);
console.log(arr); // [ <3 empty items> ]

const result = arr.fill(1);

// fill 메서드는 원본 배열을 직접 변경
console.log(arr); // [1, 1, 1]

// fill 메서든느 변경된 원본 배열을 반환
console.log(result); // [1, 1, 1]
