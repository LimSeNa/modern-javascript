function add(x, y) {
    console.log(arguments);
    // Arguments(3) [2, 5, 10, callse: f, Symbol(Symbol.iterator): f]

    return x + y;
}

add(2, 5, 10);