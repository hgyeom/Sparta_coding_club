// 클래스 생성
// 클래스 이유 : 객체를 정확하고 빠르게 많이 만들 수 있어서
class Person {
  // 인자로 필수 요소 넣기
  // 이름과 나이
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // 메서드 형태의 동사 표현
  sayHello() {
    console.log(`${this.name}님, 어서오세요.`);
  }

  // 제 나이는 ~살 입니다. 출력하기
  printMyAge() {
    console.log(`${this.name}의 나이는 ${this.age}살 입니다.`);
  }
}

// 많은 양의 배열이 있을 때 반복문을 통해 클래스로 인스턴스를 많이 만들 수 있다.

// 클래스를 통해 인스턴스 만들기
const person1 = new Person("kim", 25);
const person2 = new Person("jang", 24);

console.log(person1);
person1.sayHello();
person1.printMyAge();

console.log(person2);
person2.sayHello();
person2.printMyAge();
