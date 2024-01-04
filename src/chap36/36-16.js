const {firstName = 'SeNa', lastName} = {lastName: 'Lim'};
console.log(firstName, lastName); // SeNa Lim

const {firstName: fn = 'SeNa', lastName: ln} = {lastName: 'Lim'};
console.log(fn, ln); // SeNa Lim