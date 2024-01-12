const lee = {name: 'lee'};
const kim = {name: 'kim'};

const map = new Map([[lee, 'developer'], [kim, 'designer']]);

map.forEach((v, k, map) => console.log(v, k, map));
/*
developer { name: 'lee' } Map(2) {
  { name: 'lee' } => 'developer',
  { name: 'kim' } => 'designer'
}
designer { name: 'kim' } Map(2) {
  { name: 'lee' } => 'developer',
  { name: 'kim' } => 'designer'
}
*/