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
function sum_string(string) {
  let count = 1;
  let result = "";
  // 0 ~ string.length2 까지 루프
  for (let i = 0; i < string.length - 1; i++) {
    // i번째 문자와 i + 1번째 문자가 같으면 count++
    if (string[i] === string[i + 1]) {
      count++;
    } else {
      // i번째 문자와 i + 1번째 문자가 같지 않으면 현재 문자랑 카운트를 혼합해서 요약표현
      // count 초기화
      result += string[i] + count + "/";
      count = 1;
    }
  }
  // 인덱스 string.length - 1이 마지막 문자이기 때문에
  // result에 합산. count는 for문에서 저장된다.
  result += string[string.length - 1] + count;
  return result;
}
console.log(sum_string(string));
