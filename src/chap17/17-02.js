// String 생성자 함수에 의한 String 객체 생성
const strObj = new String('Lim');
console.log(typeof strObj); // object
console.log(strObj); // String {"Lim"}

// Number 생성자 함수에 의한 Number 객체 생성
const numObj = new Number(123);
console.log(typeof numObj); // object
console.log(numObj); // Num {123}

// Boolean 생성자 함수에 의한 Boolean 객체 생성
const boolObj = new Boolean(true);
console.log(typeof boolObj); // object
console.log(boolObj); // Boolean {true}

// Function 생성자 함수에 의한 Function 객체 생성
const func = new Function('x', 'return x * x');
console.log(typeof func); // object
console.log(func); // f anonymous(x)

// Array 생성자 함수에 의한 Array 객체 생성
const arr = new Array(1, 2, 3);
console.log(typeof arr); // object
console.log(arr); // [1, 2, 3]

// RegExp 생성자 함수에 의한 RegExp 객체 생성
const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp); // object
console.log(regExp); // /ab+c/i

// Date 생성자 함수에 의한 Date 객체 생성
const date = new Date();
console.log(typeof date); // object
console.log(date); // Tue Apr 11 2023 18:27:17 GMT+0900 (한국 표준시)

