class Prefixer {
    constructor(prefix) {
        this.prefix = prefix;
    }

    add(arr) {
        //  외부에서 this를 전달하지 않으면 this는 undefined를 가리킴
        return arr.map(function (item) {
            return this.prefix + item;
        }, this);
    }
}

const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['transition', 'user-select'])); // [ '-webkit-transition', '-webkit-user-select' ]