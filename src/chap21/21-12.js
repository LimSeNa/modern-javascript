// 전역 프로퍼티는 window를 생략하고 참조할 수 있음
console.log(window.Infinity === Infinity); // true

// 양의 무한대
console.log(3/0); // Infinity

// 음의 무한대
console.log(-3/0); // -Infinity

// Infinity는 숫자값
console.log(typeof Infinity); // number