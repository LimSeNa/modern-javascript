const todos = [
    {id: 1, content: 'HTML', completed: true},
    {id: 2, content: 'CSS', completed: true},
    {id: 3, content: 'JavaScript', completed: false},
];

// todos 배열의 두 번재 요소인 객체로부터 id 프로퍼티만 추출
const [, {id}] = todos;
console.log(id); // 2