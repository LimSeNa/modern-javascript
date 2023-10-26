class Numbers {
    numberArray = [];

    multiply(arr) {
        // TypeError: Cannot read property 'numberArray' of undefined
        arr.forEach(function (item) {
            this.numberArray.push(item * item);
        });
    }
}

const numbers = new Numbers();
numbers.multiply([1, 2, 3]);