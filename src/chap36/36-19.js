function printTodo({content, completed}) {
    console.log(`할 일 ${content}은(는) ${completed} ? '완료' : '진행' 상태입니다.`);
}

printTodo({id: 1, content: 'Next.js', completed: false}); // 할 일 Next.js은(는) 진행 상태입니다.