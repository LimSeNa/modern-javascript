// 메서드 축약 표현
// ES6
const obj = {
    name: 'Lim',
    sayHi() { // 메서드 축약 표현
        console.log('Hi!' + this.name);
    }
};

obj.sayHi(); // Hi! Lim