const set = new Set();

set.add(1);
set.add('a');
set.add(true);
set.add(undefined);
set.add(null);
set.add({});
set.add([]);
set.add(() => {});

console.log(set); // Set(8) {1, 'a', true, undefined, null, {}, [], () => {}}