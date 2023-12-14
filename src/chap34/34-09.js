// 유사 배열 객체
const arrayLike = {
    0: 1,
    1: 2,
    2: 3,
    length: 3
};

for (let i = 0; i < arrayLike.length; i++) {
    console.log(arrayLike[i]); // 1 2 3
}