const numbers = [1, 2, 3];
const pows = [];

// for 문으로 순회
for (let i = 0; i < numbers.length; i++) {
    pows.push(numbers[i] ** 2);
}

console.log(pows); // [1, 4, 9]