import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Home() {
  //   const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
      Home
      <br />
      <button
        onClick={() => {
          //   navigate("/works");
        }}
      >
        works로 이동
      </button>
      <br />
      <Link to="/contact">contact 페이지로 이동</Link>
    </div>
  );
}

export default Home;
