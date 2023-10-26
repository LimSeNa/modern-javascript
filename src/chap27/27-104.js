/*
[1, 2, 3].forEach(item => {
    console.log(item);
    if (item > 1) break; // SyntaxError: Illegal break statement
});

[1, 2, 3].forEach(item => {
    console.log(item);
    if (item > 1) continue; // SnytaxError: Illegal continue statement: no surrounding iteration statement
});*/
