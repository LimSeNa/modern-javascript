// 함수 표현식
var factorial = function foo(n) {
    if(n <= 1) return 1;
    return n * factorial(n - 1); // 함수를 가리키는 식별자로 자기 자신을 재귀 호출
    // return n * foo(n - 1);
};

console.log(factorial(5));