// n! = n * (n-1) * ... * 2 * 1
function factorial(n) {
    if (n <= 1) return 1; // 탈출 조건 : n이 1 이하일 때 재귀 호출을 멈춤
    return n * factorial(n - 1); // 재귀 호출
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120