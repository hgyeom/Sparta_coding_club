import { useState } from "react";

function App() {
  // promise
  // 상태: 대기(pending), 성공(fulfilled), 실패(rejected)

  // new Promise((resolve, reject) => { pending
  // });

  // const promiseObj = new Promise((resolve, reject) => { fulfilled
  //   resolve("데이터");
  // });

  // const promiseObj = new Promise((resolve, reject) => { rejected
  //   reject();
  // });

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    // 1 : 프로미스 객체 생성
    setIsLoading(true);
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNum = Math.floor(Math.random() * 10);
        if (randomNum < 5) {
          resolve(`Success : ${randomNum}`);
        } else {
          reject(`Error : ${randomNum}`);
        }
      }, 2000);
    });

    // 2 : 객체 상태별 처리
    promise
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        setData(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div>
      <button onClick={fetchData} disabled={isLoading}>
        {isLoading ? "loading " : "fetchData"}
      </button>
      <div>{data}</div>
    </div>
  );
}

export default App;
