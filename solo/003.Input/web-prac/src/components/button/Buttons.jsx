import React from "react";
import Button from "./Button";
function Buttons() {
  const divStyled = {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "10px",
  };

  return (
    <div>
      <h1>Button</h1>
      <div style={divStyled}>
        <Button size="large" color="#228be6" click="alert">
          Large Primary Button {">"}
        </Button>
        <Button size="medium" color="#228be6">
          medium
        </Button>
        <Button size="small" color="#228be6">
          small
        </Button>
      </div>
      <div style={divStyled}>
        <Button size="large" color="#e298fa" click="prompt">
          Large Navigate Button
          <img
            style={{
              width: "15px",
              height: "15px",
            }}
            alt="이미지"
            src="https://file.notion.so/f/s/5e9c31d9-9c5c-4ccd-8577-83283208c8e8/Untitled.png?id=5c27f293-5c5a-408f-acf2-857cce8c3489&table=block&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&expirationTimestamp=1687573622201&signature=IFwthxpvW65y0z_t6PEpkk5C_n3LEinvS5wrCxW0n5k&downloadName=Untitled.png"
          />
        </Button>
        <Button size="medium" color="#e298fa">
          medium
        </Button>
        <Button size="small" color="#e298fa">
          small
        </Button>
      </div>
    </div>
  );
}

export default Buttons;
