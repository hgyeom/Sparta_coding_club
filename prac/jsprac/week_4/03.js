// 콜백 함수를 받은 코드는 무슨 제어권을 갖고있는가
// 인자에 대한 제어권
// map()
let newArr = [10, 20, 30].map(function(currrentValue, index) {
    console.log(currrentValue, index);
    return currrentValue + 5;
});

console.log(newArr);