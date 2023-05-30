let addCoffee = function (prevName, name) {
  setTimeout(function () {
    coffeeMaker.next(prevName ? `${prevName}, ${name}` : name);
  }, 500);
};

// *가 붙은 함수가 제너레이터 함수이다.
// 이 함수를 실행하면 Iterator 객체가 반환된다.
let coffeeGenerator = function* () {
  let espresso = yield addCoffee("", "에스프레소");
  console.log(espresso);
  let americano = yield addCoffee(espresso, "아메리카노");
  console.log(americano);
  let mocha = yield addCoffee(americano, "카페모카");
  console.log(mocha);
  let latte = yield addCoffee(mocha, "카페라떼");
  console.log(latte);
};

// coffeeMaker는 Iterator 객체이다.
let coffeeMaker = coffeeGenerator();
console.log(coffeeMaker); // Object [Generator] {}
coffeeMaker.next();
