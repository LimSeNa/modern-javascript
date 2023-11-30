const obj = {
    [Symbol.for('mySymbol')]: 1
};

obj[Symbol.for('mySymbol')]; // 1