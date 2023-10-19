const arr = [1, 2, 3];

// 인수로 전달받은 값 0을 배열의 인덱스 1부터 끝까지 채움
arr.fill(0, 1);

console.log(arr); // [1, 0, 0]