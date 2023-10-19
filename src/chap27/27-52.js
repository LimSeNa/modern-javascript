const arr = [1, 2];

let result = arr.unshift(3, 4);
console.log(result); // 4

// unshift 메서드는 원본 배열을 직접 변경
console.log(arr); // [3, 4, 1, 2]