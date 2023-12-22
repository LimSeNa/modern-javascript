// ES5
var arr1 = [1, 4];
var arr2 = [2, 3];

arr1.splice(1, 0, arr2); // Array.prototype.splice(삭제를 시작할 인덱스, 삭제할 요소 개수)
console.log(arr1); // [1, [2, 3], 4]