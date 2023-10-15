const arr = [1, 2];

// arr.push(3)과 동일한 처리를 하지만 이 방법이 push 메서드보다 빠름
arr[arr.length] = 3;
console.log(arr); // [1, 2, 3]