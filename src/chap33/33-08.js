const s1 = Symbol.for('mySymbol');

// 전역 심벌 레지스트리에 저장된 심벌 값의 키를 추출
Symbol.keyFor(s1); // mySymbol

// Symbol 함수를 호출하여 생성한 심벌 값은 전역 레지스트리에 등록되어 관리되지 않음
const s2 = Symbol('foo');
Symbol.keyFor(s2); // undefined