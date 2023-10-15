const arr = [1, 2];

let result = arr.push(3, 4);
console.log(result); // 4

// push 메서드는 원본 배열을 직접 변경
console.log(arr); // [1, 2, 3, 4]