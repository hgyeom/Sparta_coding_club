let numbers = [10, 20, 3, 16, 45];
// let max = min = numbers[0];

// numbers.forEach(function(number) {
//     // 현재 숫자가 max보다 큰 경우
//     if (number > max) max = number;
//     // 현재 숫자가 min보다 작은 경우
//     if (number < min) min = number;
// });

// console.log(max, min);

// apply 

// let max = Math.max.apply(null, numbers);
// let min = Math.min.apply(null, numbers);

console.log(max, min)

// spread

let max = Math.max(...numbers);

console.log(max)