// Bad Example
function Person(name)  {
    this.name = name;
}

Person.prototype.sayHi = () => console.log(`Hi! ${this.name}.`);

const person = new Person('Lee');
person.sayHi(); // Hi!
                // this.name은 빈 문자열을 갖는 window.name과 같음