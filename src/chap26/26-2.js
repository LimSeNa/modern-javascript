var foo = function () {};

foo(); // undefined (반환문을 생략하면 암묵적으로 undefined가 반환)
new foo(); // foo {}