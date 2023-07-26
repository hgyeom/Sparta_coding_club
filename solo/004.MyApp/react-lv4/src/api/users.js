import axios from "axios";

// 회원가입
export const signup = async (body) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_AUTH_SERVER_URL}/register`,
      body
    );
    return response;
  } catch (e) {
    alert(e.response.data.message);
    return;
  }
};

// 로그인
export const login = async (body) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_AUTH_SERVER_URL}/login`,
      body
    );

    return response.data;
  } catch (e) {
    alert(e.response.data.message);
    return e.response.data.message;
  }
};

// 인가
export const user = async () => {
  const token = sessionStorage.getItem("jwtToken");
  if (token) {
    try {
      await axios.get(`${process.env.REACT_APP_AUTH_SERVER_URL}/user`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      return true;
    } catch (e) {
      if (e.response.status === 401) {
        alert(e.response.data.message);
        sessionStorage.removeItem("jwtToken");
      }
      return false;
    }
  } else {
    alert("로그인이 필요합니다.");
    return false;
  }
};
