let foo = 1;

{
    console.log(foo); // ReferenceError: Cannot access 'foo' before inititalization
    let foo = 1;
}