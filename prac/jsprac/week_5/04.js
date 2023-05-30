// Getters와 Setters
// 객체지향 프로그래밍 언어에는 getter와 stter개념이 있다.
// class를 통해 객체(인스턴스)를 만들면 인스턴스 안에는 property가 있다.
// property에 접근하고 셋팅하기 위해 getter와 setter를 사용한다.

// Rectangle(직사각형) 클래스 만들기
// class에서 this에 접근하는 property의 이름 앞에는 항상 _(언더바)를 붙여준다.
// 여기서 _(언더바)는 private의 의미를 가진다.
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // width를 위한 getter
  get width() {
    return this._width;
  }

  // width를 위한 setter
  set width(value) {
    // 검증하기
    if (value < 0) {
      console.log("[오류] 가로길이는 0보다 커야 합니다.");
      return;
    } else if (typeof value !== "number") {
      console.log("[오류] 가로길이로 입력된 값이 숫자가 아닙니다.");
      return;
    }
    this._width = value;
  }

  // height를 위한 getter
  get height() {
    return this._height;
  }

  // height를 위한 setter
  set height(value) {
    // 검증하기
    if (value < 0) {
      console.log("[오류] 세로길이는 0보다 커야 합니다.");
      return;
    } else if (typeof value !== "number") {
      console.log("[오류] 세로길이로 입력된 값이 숫자가 아닙니다.");
      return;
    }
    this._height = value;
  }

  // getArea : 가로 * 세로 = 넓이
  getArea() {
    const area = this._width * this._height;
    console.log(`넓이는 ${area} 입니다.`);
  }
}

// instance 생성하기
const rect1 = new Rectangle(10, 20);
const rect2 = new Rectangle(10, 40);
const rect3 = new Rectangle(15, 18);

rect1.getArea();
