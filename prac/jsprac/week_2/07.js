// 함수를 return하기에 고차함수이다.
function multiplyBy(num) {
    return function (x) {
        return x * num;
    }
}

function add(x, y) {
    return x + y;
}

const multiplyByTwo = multiplyBy(2); // 아래 코드와 같다
// const multiplyByTwo = function (x) {
//     return x * 2;
// }

console.log(multiplyByTwo); // 아래 코드와 같다.
// console.log(function (x) {
//     return x * 2;
// })


const multiplyByThree = multiplyBy(3); // 아래 코드와 같다
// const multiplyByTwo = function (x) {
//     return x * num;
// }

console.log(multiplyByThree);// 아래 코드와 같다.
// console.log(function (x) {
//     return x * num;
// })

console.log(multiplyByTwo(10));
console.log(multiplyByThree(10));


const result = add(multiplyByTwo(5), multiplyByThree(10));
console.log(`FINAL => ${result}`);