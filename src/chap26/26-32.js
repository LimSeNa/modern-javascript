class Prefixer {
    constructor(prefixer) {
        this.prefix = prefixer;
    }

    add(arr) {
        return arr.map(item => this.prefix + item);
    }
}

const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['transition', 'user-select'])); //  [’-webkit-transition’, ‘-webkit-user-select’]