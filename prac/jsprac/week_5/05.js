// 클래스 연습해보기, getter setter

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

// [추가 요구사항]
// 1. modelName, modelYear, price, type을 가져오는 메서드
// 2. modelName, modelYear, price, type을 세팅하는 메서드
// 3. 만든 instance를 통해 마지막에 set하고 get하는 메서드

class Car {
  constructor(modelName, modelYear, type, price) {
    this._modelName = modelName;
    this._modelYear = modelYear;
    this._type = type;
    this._price = price;
  }

  makeNoise() {
    console.log(
      `${this._modelYear}년식 ${this._modelName}차량이 클락션을 울립니다. 빵빵!`
    );
  }

  makedYear() {
    console.log(
      `${this._modelName}차량은 ${this._modelYear}년에 만들어 졌습니다.`
    );
  }

  set modelName(value) {
    if (value.length <= 0) {
      console.log("[오류] 모델명을 입력해 주세요.");
      return;
    } else if (typeof value !== "string") {
      console.log("[오류] 문자열로 입력해 주세요.");
      return;
    }
    this._modelName = value;
  }
  set modelYear(value) {
    if (value.length !== 4) {
      console.log("[오류] 연식이 4자리가 아닙니다.");
      return;
    } else if (typeof value !== "string") {
      console.log("[오류] 문자열로 입력해 주세요.");
      return;
    }
    this._modelYear = value;
  }
  set price(value) {
    if (typeof value !== "number") {
      console.log("[오류] 숫자로 입력해 주세요.");
      return;
    } else if (value < "1000000") {
      console.log("[오류] 가격은 100만원보다 작을 수 없습니다.");
      return;
    }
    this._price = value;
  }
  set type(value) {
    if (value.length <= 0) {
      console.log("[오류] 타입을 입력해 주세요.");
      return;
    } else if (value !== g && value !== d && value !== e) {
      console.log("[오류] 타입이 잘못 입력되었습니다. 타입을 확인해 주세요.");
      return;
    } else if (typeof value !== "string") {
      console.log("[오류] 문자열로 입력해 주세요.");
      return;
    }
    this._type = value;
  }

  get modelName() {
    return this._modelName;
  }
  get modelYear() {
    return this._modelYear;
  }
  get price() {
    return this._price;
  }
  get type() {
    return this._type;
  }
}

const car1 = new Car("mercedes", "2022", "e", 8000);
// car1.makeNoise();
// car1.makedYear();
// get
console.log(car1.modelName);
// set
car1.modelYear = "2023";
console.log(car1);

const car2 = new Car("sonata", "2016", "g", 4000);
// car2.makeNoise();
// car2.makedYear();

const car3 = new Car("sorento", "2015", "d", 2000);
// car3.makeNoise();
// car3.makedYear();
