const obj = {
    x: 1,
    foo() { return this.x; },
    bar: function() { return this.x; },
};

obj.foo.hasOwnProperty('prototype'); // false
obj.bar.hasOwnProperty('prototype'); // true