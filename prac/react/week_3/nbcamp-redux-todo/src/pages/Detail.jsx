import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import shortid from "shortid";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const todo = todos.filter((todo) => todo.id === id)[0];

  const reviews = useSelector((state) => state.reviews);
  useEffect(() => {
    dispatch({
      type: "READ_REVIEW",
      payload: id,
    });
  }, []);

  const [reviewBody, setReviewBody] = useState("");

  const removeButtonClickHandler = (id) => {
    dispatch({
      type: "REMOVE_REVIEW",
      payload: id,
    });
  };
  return (
    <div>
      {todo.id}
      <br />
      {todo.title}
      <br />
      {todo.body}
      <br />
      {todo.isDone.toString()}
      <br />
      <button onClick={() => navigate("/")}>이전 화면으로</button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: "ADD_REVIEW",
            payload: {
              reviewId: shortid.generate(),
              todoId: shortid.generate(),
              body: reviewBody,
              time: new Date().toLocaleTimeString(),
            },
          });
        }}
      >
        댓글
        <br />
        <input
          type="text"
          value={reviewBody}
          onChange={(e) => {
            setReviewBody(e.target.value);
          }}
        />
        <button>등록</button>
      </form>
      <div>
        {reviews.map((review) => {
          return (
            <div
              key={review.reviewId}
              style={{
                display: "flex",
                border: "solid 1px black",
                justifyContent: "spaceBetween",
                width: "300px",
                margin: "10px",
              }}
            >
              {review.time.toString()}
              <br />
              {review.body}
              <button
                style={{ height: "25px", width: "80px" }}
                onClick={() => removeButtonClickHandler(review.reviewId)}
              >
                삭제
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Detail;
