import "./App.css";
// import styled from "styled-components";
import TestPage from "./components/TestPage";
import GlobalStyle from "./GlobalStyle";
// const StBox = styled.div`
//   width: 100px;
//   height: 100px;
//   border: 1px solid ${({ borderColor }) => borderColor};
//   margin: 20px;
// `;

// const boxColors = ["red", "blue", "green", "black"];
// const getColorName = (boxColor) => {
//   switch (boxColor) {
//     case "red":
//       return "빨간색";
//     case "blue":
//       return "파란색";
//     case "green":
//       return "초록색";
//     default:
//       return "검은색";
//   }
// };

function App() {
  return (
    // <>
    //   {boxColors.map((boxColor) => {
    //     return <StBox borderColor={boxColor}>{getColorName(boxColor)}</StBox>;
    //   })}
    // </>
    <>
      <GlobalStyle />
      <TestPage
        title="늑대와 향신료"
        contents="이 마을에서는 잘 익은 보리이삭이 바람에 흔들리는 것을 '늑대가 달린다'고 말한다."
      />
    </>
  );
}

// props : 부모 컴포넌트에서 자식 컴포넌트에게 넘겨주는 데이터
export default App;
