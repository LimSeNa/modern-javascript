// 식별자 네이밍 규칙을 준수하는 프로퍼티 키와 그렇지 않은 프로퍼티 키
var person = {
    firstName: 'Sena', // 식별자 네이밍 규칙을 준수하는 프로퍼티 키
    'last-name': 'Lim' // 식별자 네이밍 규칙을 준수하지 않는 프로퍼티 키
};

console.log(person); // {firstName: "Sena", last-name: "Lim"}