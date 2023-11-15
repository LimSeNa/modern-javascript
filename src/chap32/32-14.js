const str = 'Hello world';

str.includes('Hello'); // true
str.includes(''); // true
str.includes('x'); // false
str.includes(); // false

str.includes('l', 3); // true
str.includes('H', 3); // false