const lee = {name: 'lee'};
const kim = {name: 'kim'};

const map = new Map([[lee, 'developer'], [kim, 'designer']]);

console.log(Symbol.iterator in map); // true

for (const entry of map) {
    console.log(entry); // [{name: 'lee'}, 'developer'] [{name: 'kim'}, 'designer']
}

console.log([...map]); // [[{name: 'lee'}, 'developer'], [{name: 'kim'}, 'designer']]

const [a, b] = map;
console.log(a, b); // [{name: 'lee'}, 'developer'] [{name: 'kim'}, 'designer']