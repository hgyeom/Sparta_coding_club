// let string = "aaaddc";
// let result = "";
// let count = 0;
// let alphabet = string[0];
// for (let i = 0; i < string.length; i++) {
//   if (string[i] === alphabet) {
//     count++;
//   }
//   if (string[i] !== alphabet) {
//     result += alphabet + count;
//     alphabet = string[i];
//     count = 1;
//   }
// }
// result += alphabet + count;
// console.log(result);

let string = "aaabcdd";
let count = 0;
let result = "";
for (let i = 0; i < string.length - 1; i++) {
  if (string[i] === string[i + 1]) {
    count++;
  } else {
    result += string[i] + ++count + "/";
    count = 0;
  }
}
console.log(result);
