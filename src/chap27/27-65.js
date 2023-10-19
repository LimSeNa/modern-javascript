const arr = [1, 2, 3, 1, 2];

function remove(array, item) {
    const index = array.indexOf(item);

    // 제거할 item 요소가 있다면 제거
    if (index !== -1) array.splice(index, 1);

    return array;
}

console.log(remove(arr, 2)); // [1, 3, 1, 2]
console.log(remove(arr, 10)); // [1, 3, 1, 2]