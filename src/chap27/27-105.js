// 희소 배열
const arr = [1, , 3];

// for 문으로 희소 배열을 순회
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // 1, undefined, 3
}

// forEach 메서드로 희소 배열을 순회
arr.forEach(v => console.log(v)); // 1, 3