// this가 subset의 상위 집합인지 확인
Set.prototype.inSuperset = function (subset) {
    const supersetArr = [...this];
    return [...subset].every(v => supersetArr.includes(v));
}

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

// setA가 setB의 상위 집합인지 확인
console.log(setA.inSuperset(setB)); // true
// setB가 setA의 상위 집합인지 확인
console.log(setB.inSuperset(setA)); // false