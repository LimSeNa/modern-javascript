// 카운트 상태 변수
let num = 0;

// 카운트 상태 변경 함수
const increase = function () {
    return ++num;
}

console.log(increase()); // 1
console.log(increase()); // 2
console.log(increase()); // 3