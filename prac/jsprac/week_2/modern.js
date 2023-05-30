function sumTo(n) {
    let sum = 0;
    for(let i = n; i > 0; i--){
        sum+=i;
    }
    return sum;
}



function sumTo(n) {
    if(n === 0) return n;
    n += sumTo(n-1);
    return n;
}

console.log(sumTo(10))