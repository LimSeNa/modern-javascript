// 인수로 전달받은 정수만큼 요소를 생성하고 0부터 1씩 증가하면서 요소를 채움
const sequences = (length = 0) => Array.from({length}, (_, i) => i);

console.log(sequences(3)); // [0, 1, 2]