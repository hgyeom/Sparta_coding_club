// 콜백 함수를 받은 코드는 무슨 제어권을 갖고있는가
// 인자에 대한 제어권
// map()

// 매개변수의 순서가 중요하다.
// 첫번째 인자에 index라는 이름을 붙였지만 이름만 index일 뿐 실제 index를 지칭하는게 아니다.
let newArr = [10, 20, 30].map(function(index, currrentValue) {
    console.log(index, currrentValue);
    return currrentValue + 5;
});

console.log(newArr);