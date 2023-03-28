// 값에 의한 전달. 변경하는 경우
var score = 80;

// copy 변수에는 score 변수의 값 80이 복사되어 할당
var copy = score;

console.log(score, copy); // 80, 80
console.log(score === copy); // true

// score 변수와 copy 변수의 값은 다른 메모리 공간에 저장된 별개의 값
// 따라서 score 변수의 값을 변경해도 copy 변수의 값에는 어떠한 영향을 주지 않음
score = 100;

console.log(score, copy); // 100, 80
console.log(score === copy); // false