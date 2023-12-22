// ES5
var origin = [1, 2];
var copy = origin.slice(); // slice 메서드는 인수로 전달된 범위의 요소들을 복사하여 배열로 반환

console.log(copy); // [1, 2]
console.log(copy === origin); // false
