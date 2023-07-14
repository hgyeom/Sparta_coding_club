import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
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
      <div>
        {data?.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                border: "1px solid black",
                margin: "10px",
                padding: "10px",
              }}
            >
              <p>{item.id}</p>
              <p>{item.title}</p>
              <p>{item.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
