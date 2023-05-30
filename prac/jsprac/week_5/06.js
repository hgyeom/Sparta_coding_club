// 상속(Inheritance)
// Class의 기능을 유산으로 내려주는 기능
// 부모, 자식 관계

// 동물 전체의 클래스
class Animal {
  // 생성자
  constructor(name) {
    this.name = name;
  }

  // 메서드(짖다)
  speak() {
    console.log(`${this.name} says!`);
  }
}

const kim = new Animal("kim");
kim.speak();

// 강아지 클래스 만들기. Animal 클래스를 상속받음.
class Dog extends Animal {
  // 부모에게 상속받은 메서드 재 정의. 오버라이딩
  speak() {
    console.log(`${this.name}: bark!!`);
  }
}

const dog1 = new Dog("bok");
dog1.speak();
