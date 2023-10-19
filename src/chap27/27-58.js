const arr1 = [3, 4];

// unshift 메서드는 원본 배열을 직접 변경하므로 원본 배열을 변수에 저장해 두지 않으면 변경된 배열을 사용할 수 없음
arr1.unshift(1, 2);
console.log(arr1); // [1, 2, 3, 4]

// push 메서드는 원본 배열을 직접 변경하므로 원본 배열을 변수에 저장해 두지 않으면 변경된 배열을 사용할 수 없음
arr1.push(5, 6);
console.log(arr1); // [1, 2, 3, 4, 5, 6]

// unshift와 push 메서든는 concat 메서드로 대체 가능
const arr2 = [3, 4]

// arr1.unshift(1, 2)를 다음과 같이 대체
let result = [1, 2].concat(arr2);
console.log(result); // [1, 2, 3, 4]

// arr1.push(5, 6)를 다음과 같이 대체
result = result.concat(5, 6);
console.log(result); // [1, 2, 3, 4, 5, 6]