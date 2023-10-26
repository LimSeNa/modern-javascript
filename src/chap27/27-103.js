// 만약 Array.prototype에 forEach 메서드가 존재하지 않으면 폴리필을 추가
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (callback, thisArg) {
        // 첫 번째 인수가 함수가 아니면 TypeError를 발생
        if (typeof callback !== 'function') {
            throw new TypeError(callback + 'is not a function.');
        }

        // this로 사용할 두 번째 인수를 전달받지 못하면 전역 객체를 this로 사용
        thisArg = thisArg || window;

        // for 문으로 배열을 순회하면서 콜백 함수를 호출
        for (var i = 0; i < this.length; i++) {
            // call 메서드를 통해 thisArg를 전달하면서 콜백 함수를 호출
            // 이때 콜백 함수의 인수로 배열 요소, 인덱스, 배열 자신을 전달
            callback.call(thisArg, this[i], i, this);
        }
    };
}