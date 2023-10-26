const fruits = ['banana', 'apple', 'orange', 'orange', 'apple'];

const count = fruits.reduce((acc, cur) => {
    // 첫 번째 순회 시 acc는 초기값인 {}이고 cur는 첫 번재 요소인 'banana'
    // 초기값으로 전달받은 빈 객체에 요소값인 cur을 프로퍼티 키로, 요소의 개수를 프로퍼티값을 할당
    // 프로퍼티 값이 undefined(처음 등장하는 요소)이면 프로퍼티 값을 1로 초기화
    acc[cur] = (acc[cur] || 0)  + 1;
    return acc;
}, {});

console.log(count); // { banana: 1, apple: 2, orange: 2 }