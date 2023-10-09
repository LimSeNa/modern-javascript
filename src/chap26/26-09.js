const base = {
    name: 'Lee',
    sayHi() {
        return `Hi! ${this.name}`;
    }
};

const derived = {
    __proto__: base,
    sayHi() {                                       // sayHi는 ES6 메서드이므로 내부 슬롯 [[HomeObject]]를 갖고
        return `${super.sayHi()}. How are you doing?`;     // 이 내부 슬롯은 derived를 값으로 갖는다.
    }                                                      // super는 내부 슬롯의 값을 사용하여 derived의 수퍼클래스인 base를 참조
};

console.log(derived.sayHi()); // Hi! Lee. How are you doing?