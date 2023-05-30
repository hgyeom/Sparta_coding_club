let count = 1;
Array.prototype.mapa = function(callback, thisArg) {
    
    // map함수에서 return할 결과 배열
    let mappedArr = [];

    // map은 항상 callback함수를 받는다. 
    // 여기서 callback은 newArr의 function check이다.
    console.log('mapa 콜백 체크:',callback) // [Function: check]

    // [1, 2, 3]이 mapa의 호출의 주체이기 때문에 this는 [1, 2, 3]이 된다.
    console.log('mapa this 체크:',this) // [ 1, 2, 3 ]

    // this는 배열 [1, 2, 3]이기 때문에 length는 3이 된다.
    for (let i = 0; i < this.length; i++) {
        // call함수를 사용. 
        // thisArg매개변수가 전달되었으면 callback함수의 this값으로 사용한다.
        // 여기서는 thisArg가 없기 때문에 global이 this가 된다.
        // 다시한번 말하지만 this는 배열 [1, 2, 3]이다.
        let mappedValue = callback.call(thisArg || global, this[i]);
        // 이 시점에서 이미 callback함수(function check)가 호출되었기 때문에
        // maapedArr에는 *2된 값이 들어간다.
        console.log('mapa for문 체크:',count)
        count++
        mappedArr[i] = mappedValue;
    }
    return mappedArr;
}

// map은 배열을 받아 변환하여 새로운 함수를 반환한다.
let newArr = [1, 2, 3].mapa(function check(number){ 
    console.log('newarr call 체크:',count)
    console.log('newarr call 체크:',this)
    count++
    return number * 2;
});

// this 전달하기
// let newArr = [1, 2, 3].mapa(function check(number){ 
//     console.log('newarr call 체크:',count)
//     console.log('this',this)
//     count++
//     return number * 2;
// },{count});


console.log(newArr);