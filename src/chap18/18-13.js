// 함수 객체는 prototype 프로퍼티를 소유
(function () {}).hasOwnProperty('prototype'); // true

// 일반 객체는 prtotype 프로퍼티를 소유하지 않음
({}).hasOwnProperty('prototype'); // false