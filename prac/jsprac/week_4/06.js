// obj
// 2가지 속성

let obj = {
    vals: [1, 2, 3],
    logValues: function (v, i) {
        console.log("-----start-----");
        if (this === global) {
            console.log('this가 global 입니다.');
        } else {
            console.log(this, v, i);
        }
        console.log("-----end-----");
    }
};

// 메소드로서 호출
obj.logValues(1, 2);

// forEach, map, filter 모두 첫번째 인자는 배열의 n번째 요소가 들어가고 
// 두번째 인자는 그 요소의 index가 들어간다.
// 메서드의 형태로 보이나 함수를 넣은것이다.
[4, 5, 6].forEach(obj.logValues);