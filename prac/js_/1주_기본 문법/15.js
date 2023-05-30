// for문과 continue, break 키워드를 사용하여 아래 결과와 같이 출력되도록 함수를 완성해 보세요.

function countEvenNumbersUpto5(numArr) {
  // numArr 배열을 요소들을 탐색하여 요소가 짝수인 경우 개수를 카운트 해야 합니다.
  // 그러나 개수는 최대 5개까지만 셀 수 있도록 제한합니다.
  let count = 0;

  // 이 부분을 완성해 보세요.
  for (let i = 0; i < numArr.length; i++) {
    // 홀수면 다음 반복으로 간다.
    if (numArr[i] % 2 !== 0) continue;
    // 짝수면 더한다.
    // count가 5면 멈춘다.
    if (++count === 5) break;
  }

  return count;
}

const result1 = countEvenNumbersUpto5([
  1, 2, 3, 4, 6, 8, 10, 12, 13, 14, 15, 16,
]);
console.log(result1); // 출력 결과: 5

const result2 = countEvenNumbersUpto5([1, 3, 5, 6, 8, 10]);
console.log(result2); // 출력 결과: 3
