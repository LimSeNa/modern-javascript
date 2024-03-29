function foo(func) {
    return func();
}

function bar() {
    return 'caller: ' + bar.caller;
}

console.log(foo(bar)); // caller: function foo(func) {...}
console.log(bar()); // caller: null