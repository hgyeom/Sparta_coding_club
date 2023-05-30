// 호출 주체가 있는 경우에서의 명시적 binding

let obj = {
    a:1,
    method: function (x, y) {
        console.log(this.a, x, y);
    }
}

// this는 obj를 가리킨다
// obj.method(2,3)

// call함수를 이용하여 this의 a를 4로 변경했다.
obj.method.call({a: 4},5,6)
