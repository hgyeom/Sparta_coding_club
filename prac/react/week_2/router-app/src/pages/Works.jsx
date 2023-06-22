import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { data } from "../shared/Data";
function Works() {
  const navigate = useNavigate();
  return (
    <div>
      {data.map((item) => {
        return (
          <div
            key={item.id}
            style={{ border: "solid 1px black", margin: "5px" }}
          >
            <Link to={`/works/${item.id}`}>
              <p>{item.id}</p>
              <p>{item.todo}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Works;
