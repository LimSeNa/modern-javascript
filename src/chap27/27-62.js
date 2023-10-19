const arr = [1, 2, 3, 4];

// 원본 배열의 인덱스 1부터 0개의 요소를 제거하고 그 자리에 새로운 요소 100을 삽입
const result = arr.splice(1, 0, 100);

// 원본 배열이 변경됨
console.log(arr); // [1, 100, 2, 3, 4]

// 제거한 요소가 배열로 반환됨
console.log(result); // []