// 이터러블
const iterable = [1, 2, 3];

// 이터러블의 Symbol.iteraotr 메서드를 호출하여 이터레이터를 반환
const iterator = iterable[Symbol.iterator]();

for (;;) {
    // 이터레이터의 next 메서드를 호출하여 이터레이터 리절트 객체를 반환
    const result = iterator.next();

    // 이터레이터 리절트 객체의 done 프로퍼티 값이 true이면 이터러블 순회 중단
    if (result.done) break;

    // 이터레이터 리절트 객체의 value 프로퍼티 값을 item에 할당
    const item = result.value;
    console.log(item); // 1 2 3
}