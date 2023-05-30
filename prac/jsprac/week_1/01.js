// 변수, 상수
// 기억하고 싶은 값을 메모리에 저장하는것. 저장한 값을 읽어 들여서 재사용 하기 위해 변수를 사용한다.

// 변수의 5가지 주요 개념

// 변수 이름 : 저장된 값의 고유 이름
// 변수 값 : 변수에 저장된 값
// 변수 할당 : 변수에 값을 저장하는 행위
// 변수 선언 : 변수를 사용하기 위해 컴퓨터에 알리는 행위
// 변수 참조 : 변수에 할단된 값을 읽어오는것

// 변수를 선언할 수 있는 3가지 방법 : var, let, const
// var는 예전부터 사용되던 방법. 현재는 거의 사용하지 않는다. 
// let과 const는 ECMAScript 6(ES6)에서 새로 도입된 방법. const는 상수 선언을 위해 사용한다.

// 1. var. 
var myVar = "Hello World1";
var myVar = "Test 1";
myVar = "GoodBye1"

console.log(myVar);

// 2. let
let myLet = "Hello World2";
// let myLet = "Test 2";
myLet = "GoodBye2"

console.log(myLet);

// 3. const
const myConst = "Hello World3";
// const myConst = "Test 3";
myConst = "GoodBye3"

console.log(myConst);