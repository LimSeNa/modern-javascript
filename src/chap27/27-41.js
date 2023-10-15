const arr = [1];

// push 메서드는 원본 배열 arr를 직접 변경
arr.push(2);
console.log(arr); // [1, 2]

// concat 메서드는 원본 배열 arr를 직접 변경하지 않고 새로운 배열을 생성하여 반환
const result = arr.concat(3);
console.log(arr); // [1, 2]
console.log(result); // [1, 2, 3]