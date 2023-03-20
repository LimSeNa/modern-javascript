var x = 5, result;

// 후위 증가 연산자 : 선할당 후증가
result = x++;
console.log(result, x); // 5 6

// 전위 증가 연산자 : 선증가 후할당
result = ++x;
console.log(result, x); // 7 7

// 후위 감소 연산자 : 선할당 후감소
result = x--;
console.log(result, x); // 7 6

// 전위 감소 연산자 : 선감소 후할당
result = --x;
console.log(result, x); // 5 5

