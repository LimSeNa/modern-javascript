// 식별자 str은 문자열을 값으로 가지고 있음
const str = 'hello';

// 식별자 str은 암묵적으로 래퍼 객체를 가리킴
// 식별자 str의 값 'hello'는 래퍼 객체의 [[StringData]] 내부 슬롯에 할당됨
// 래퍼 객체에 name 프로퍼티가 동적으로 추가됨
str.name = 'Lee';

// 식별자 str은 다시 원래의 문자열을 갖음
// 이때 래퍼 객체는 아무도 참조하지 않는 상태이므로 가비지 컬렉션의 대상이 됨

// 식별자 str은 새롭게 암묵적으로 생성된 래퍼 객체를 가리킴
// 새롭게 생성된 래퍼 객체에는 name 프로퍼티가 존재하지 않음
console.log(str.name); // undefined

// 식별자 str은 다시 원래의 문자열을 갖음
// 이때 래퍼 객체는 아무도 참조하지 않은 상태이므로 가비지 컬렉션의 대상이 됨
console.log(typeof str, str); // string hello