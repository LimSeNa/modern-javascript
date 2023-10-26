const arr = ['hello', 'world'];

// flatMap 메서드는 1단계만 평탄화
arr.flatMap((str, index) => [index, [str, str.length]]);
// [ 0, [ 'hello', 5 ], 1, [ 'world', 5 ] ]

// 평탄화 깊이를 지정해야 한다면 flatMap 메서드를 사용하지 말고 map 메서드와 flat 메서드를 각각 호출
arr.map((str, index) => [index, [str, str.length]]).flat(2);
// [ 0, 'hello', 5, 1, 'world', 5 ]