// 아래는 점수에 따라 학점을 반환해 주는 함수입니다.
// if / else if 문을 활용하여 아래 결과대로 출력되도록 함수를 완성해 보세요.
// 90 ~ 100 : A
// 80 ~ 90: B
// 70 ~ 80: C
// 60 ~ 70: D
// 60 미만: F

function getGrade(score) {
  if (score > 89) return "A";
  else if (score > 79) return "B";
  else if (score > 69) return "C";
  else if (score > 59) return "D";
  else return "F";
}

const result1 = getGrade(88);
const result2 = getGrade(65);

console.log(result1); // 출력 결과: 'B'
console.log(result2); // 출력 결과: 'D'
