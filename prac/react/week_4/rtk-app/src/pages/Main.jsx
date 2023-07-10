import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/modules/userSlice";

function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const boardList = useSelector((state) => state.boardSlice);

  const userList = useSelector((state) => state.userSlice);

  const loginUser = userList.find((user) => user.isLogin === true);

  console.log("loginUser", loginUser);
  console.log("userList", userList);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <button onClick={() => navigate("/login")}>로그인</button>
          <button onClick={() => navigate("/join")}>회원가입</button>
          <button
            onClick={() => {
              if (loginUser) {
                navigate("/write", {
                  state: { userId: loginUser.id },
                });
              } else {
                alert("로그인 후 이용 가능합니다.");
                return false;
              }
            }}
          >
            글 작성
          </button>
        </div>
        {loginUser && (
          <div>
            {loginUser.userName}님, 반갑습니다!
            <button
              onClick={() => {
                const isConfirmed = window.confirm("로그아웃 하시겠습니까?");
                if (isConfirmed) {
                  dispatch(logout(loginUser.id));
                }
              }}
            >
              로그아웃
            </button>
          </div>
        )}
      </div>
      <div>
        {boardList
          .filter((board) => board.isDeleted === false)
          .map((board) => {
            return (
              <div
                key={board.id}
                style={{
                  backgroundColor: "#bfd8ff",
                  border: "1px solid black",
                  padding: "10px",
                  margin: "10px",
                }}
              >
                <h4>{board.id}</h4>
                <h4>{board.title}</h4>
                <h4>{board.contents}</h4>
                <h4>{board.isDeleted}</h4>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Main;
