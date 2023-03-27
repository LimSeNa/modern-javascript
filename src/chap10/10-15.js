// 프로퍼티 접근
var person = {
    'last-name': 'Lim',
    1: 10
};

// person.'last-name'; // SyntaxError: Unexpected string
peson.last-name; // NaN(브라우저 환경)
                 // ReferenceError: name is not defined(Node.js 환경)

person['last-name']; // Lim
person[last-name]; // ReferenceError: last is not defined

// 프로퍼티 키가 숫자로 이뤄진 문자열인 경우 따옴표 생략 가능
// person.1; // SyntaxError: Unexpected unmber
// person.'1'; // SyntaxError: Unexpected string
person[1]; // 10: person[1] -> person['1']
person['1']; // 10