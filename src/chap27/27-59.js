const arr = [3, 4];

arr.unshift([1, 2]);
arr.push([5, 6]);
console.log(arr); // [[1, 2], 3, 4, [5, 6]]

let result = [1, 2].concat([3, 4]);
result = result.concat([5, 6]);
console.log(result); // [1, 2, 3, 4, 5, 6]