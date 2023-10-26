const numbers = [1, 2, 3, 4, 5];

// numbers 배열에서 홀수인 요소만 필터링(1은 true로 평가)
const odds = numbers.filter(item => item % 2);
console.log(odds); // [1, 3, 5]