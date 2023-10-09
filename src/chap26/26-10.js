const base = {
    name: 'Lee',
    sayHi() {
        return `Hi! ${this.name}`;
    }
};

const derived = {
    __proto__: base,
    sayHi: function () {
        return `${super.sayHi()}. How ard you doing?`; // SyntaxError: 'supper' keyword unexpected here
    }
};