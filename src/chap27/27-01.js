const arr = ['apple', 'banana', 'orange'];

arr[0] // 'apple'
arr[1] // 'banana'
arr[2] // 'orange'

arr.length // 3

// 배열의 순회
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // 'apple' 'banana' 'orange'
}

typeof arr // object