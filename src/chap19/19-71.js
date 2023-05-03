const arr = [1, 2, 3];
arr.x = 10; // 배열도 객체이므로 프로퍼티를 가질 수 있음

for (const i in arr) {
    // 프로퍼티 x도 출력됨
    console.log(arr[i]); // 1 2 3 10
}

// for 문
// arr.length는 3
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // 1 2 3
}

// forEach 메서드는 요소가 아닌 프로퍼티는 제외
arr.forEach(v => console.log(v)); // 1 2 3

// for ... of 문은 변수 선언문에서 선언한 변수에 키가 아닌 값을 할당
for (const value of arr) {
    console.log(value); // 1 2 3
}