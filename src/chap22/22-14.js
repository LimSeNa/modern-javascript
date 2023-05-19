const person = {
    name: 'Lee',
    getName() {
        // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩
        return this.name;
    }
};

// 메서드 getName을 호출한 객체는 person
console.log(person.getName()); // Lee

const anotherPerson = {
    name: 'Kim'
};

// getName 메서드를 anotherPerson 객체의 메서드로 할당
anotherPerson.getName = person.getName;

// getName 메서드를 변수에  할당
const getName = person.getName;

// getName 메서드를 일반 함수로 호출
// 일반 함수로 호출된 getName 함수 내부의 this.name은 브라우저 환경에서 window.name과 같음
console.log(getName()); // ''