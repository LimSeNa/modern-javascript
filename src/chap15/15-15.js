{
    console.log(foo); // ReferenceError : Cannot access 'foo' before initialization
    const foo = 1;
    console.log(foo); // 1
}

// 블록 레벨 스코프
console.log(foo); // ReferenceError: foo is not defined