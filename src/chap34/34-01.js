const isIterable = v => v !== null && typeof v[Symbol.iterator] === 'function';

isIterable([]); // true
isIterable(''); // true
isIterable(new Map()); // true
isIterable(new Set()); // true
isIterable({}); // false