// static method(정적 메소드)
// class 사용 이유 > 객체를 많이, 안전하게 만들기 위해
// 변하지 않는 메소드를 static메소드로 정의하고 클래스 호출하는 방법도 있다.

class Calculator {
  static add(a, b) {
    console.log("[계산기] 더하기 실행.");
    return a + b;
  }

  static substract(a, b) {
    console.log("[계산기] 빼기 실행.");
    return a - b;
  }
}

console.log(Calculator.add(3, 6));
console.log(Calculator.substract(3, 6));
