const str = 'Hello World';

str.substring(0, str.indexOf(' ')); // Hello

str.substring(str.indexOf(' ') + 1, str.length); // World