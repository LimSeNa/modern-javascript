const arr = [1, , 3];

console.log(Object.getOwnPropertyDescriptors(arr));
/*
{
    '0': { value: 1, writable: true, enumerable: true, configurable: true },
    '2': { value: 3, writable: true, enumerable: true, configurable: true },
    length: { value: 3, writable: true, enumerable: false, configurable: false }
}
*/

console.log(arr[1]); // undefined
console.log(arr[3]); // undefined