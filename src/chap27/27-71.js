const todos = [
    {id: 1, content: 'HTML', completed: false},
    {id: 2, content: 'CSS', completed: true},
    {id: 3, content: 'JavaScript', completed: false}
];

// 얕은 복사
const copyTodos = todos.slice();

// todos와 copyTodos는 참조값이 다른 별개의 객체
console.log(todos === copyTodos); // false

// 배열 요소의 참조값은 같음
// 즉, 얕은 복사
console.log(todos[0] === copyTodos[0]); // true
