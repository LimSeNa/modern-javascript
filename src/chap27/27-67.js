const arr = [1, 2, 3];

// arr[0]부터 arr[1] 이전까지 복사하여 반환
arr.slice(0, 1); // [1]

// arr[1] 부터 arr[2] 이전까지 복사하여 반환
arr.slice(1, 2); // [2]

// 원본 배열은 변경되지 않음
console.log(arr); // [1, 2, 3]