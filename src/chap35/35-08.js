function foo(...rest) {
    console.log(rest); // [1, 2, 3]
}

foo(...[1, 2, 3]);