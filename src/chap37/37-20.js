Set.prototype.union = function (set) {
    // this(Set 객체) 복사
    const result = new Set(this);

    for (const value of set) {
        result.add(value);
    }

    return result;
}

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

// setA와 setB의 합집합
console.log(setA.union(setB)); // Set(4) {1, 2, 3, 4}
// setB와 setA의 합집합
console.log(setB.union(setA)); // Set(4) {2, 4, 1, 3}