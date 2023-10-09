const obj = {
    x: 1,
    foo() { return this.x; },
    bar: function() { return this.x; },
};

new obj.foo(); // TypeError: obj.foo is not a constructor
new obj.bar(); // bar {}