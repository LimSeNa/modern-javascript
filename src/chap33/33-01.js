// Symbol 함수를 호출하여 심벌 값을 생성
const mySymbol = Symbol();
console.log(typeof mySymbol); // symbol

// 심벌 값은 외부로 노출되지 않어 확인할 수 없음
console.log(mySymbol); // Symbol()