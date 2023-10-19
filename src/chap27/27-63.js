const arr = [1, 2, 3, 4];

// 원본 배열의 인덱스 1부터 2개의 요소를 제거
const result = arr.splice(1, 2);

// 원본 배열이 변경됨
console.log(arr); // [1, 4]

// 제거한 요소가 배열로 반환됨
console.log(result); // [2, 3]