// 이터러블이면서 이터레이터인 객체
/*
{
    [Symbol.iterator]() { return this; },
    next() {
        return {value: any, done: boolean};
    }
}*/
