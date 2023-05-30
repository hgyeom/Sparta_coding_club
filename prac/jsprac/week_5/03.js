// 클래스 연습해보기

// [요구사항]
// 1.Car라는 새로운 클래스를 만들되, 처음 객체를 만들 때는
//  다음 네 개의 값이 필수로 입력돼야 한다.
//  (1) modelName
//  (2) modelYear
//  (3) type
//  (4) price
// 2. makeNoise()) 메서드를 만들어 클락션을 출력해주세요.
// 2-1. 해당 자동차가 몇년도 모델인지 출력하는 모델 작성.
// 3. 이후 자동차를 3개정도 만들어 주세요.

class Car {
  constructor(modelName, modelYear, type, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
  }

  makeNoise() {
    console.log(
      `${this.modelYear}년식 ${this.modelName}차량이 클락션을 울립니다. 빵빵!`
    );
  }

  makedYear() {
    console.log(
      `${this.modelName}차량은 ${this.modelYear}년에 만들어 졌습니다.`
    );
  }
}

const car1 = new Car("mercedes", "2022", "e", 8000);
car1.makeNoise();
car1.makedYear();

const car2 = new Car("sonata", "2016", "b", 4000);
car2.makeNoise();
car2.makedYear();

const car3 = new Car("sorento", "2015", "a", 2000);
car3.makeNoise();
car3.makedYear();
