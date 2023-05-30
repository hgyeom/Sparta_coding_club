// Promise
// 이전에 사용한 방법 : then
// 이번에 사용할 방법 : async(비동기), await(기다리다)

// coffeeMaker 함수에서 호출할 함수 addcoffe 선언
// Promise 반환
let addCoffee = function (name) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(name);
    }, 500);
  });
};

// async를 붙이게 되면 스코프 내부의 Promise를 반환하는 함수인 경우
// await가 붙은 메서드는 메서드가 끝날 때 까지 기다린다.
let coffeeMaker = async function () {
  let coffeeList = "";
  let _addCoffee = async function (name) {
    coffeeList += (coffeeList ? ", " : "") + (await addCoffee(name));
  };

  // _addCoffee("에스프레소")가 실행되는데 100초가 걸렸다면
  await _addCoffee("에스프레소");

  // console.log는 100초 뒤에 실행된다.
  console.log(coffeeList);

  await _addCoffee("아메리카노");
  console.log(coffeeList);
  await _addCoffee("카페모카");
  console.log(coffeeList);
  await _addCoffee("카페라떼");
  console.log(coffeeList);
};

coffeeMaker();
