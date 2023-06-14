import "App.css";
import Button from "components/Button";
import UserItem from "components/UserItem";
import { useState } from "react";

function App() {
  // const arr = ["감자", "고구마", "오이", "가지", "옥수수"];
  // return (
  //   <div className="app-style">
  //     {arr
  //       .filter((item) => {
  //         return item !== "오이";
  //       })
  //       .map((item) => {
  //         return <div className="component-style">{item}</div>;
  //       })}
  //   </div>
  // );
  // const users = [
  //   { id: 1, age: 30, name: "송중기" },
  //   { id: 2, age: 24, name: "송강" },
  //   { id: 3, age: 21, name: "김유정" },
  //   { id: 4, age: 29, name: "구교환" },
  // ];

  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const onNameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const onAgeChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const clickAddButtonHandler = () => {
    // 1. 새로운 형태의 users요소를 만든다.
    // 2. 배열에 더한다.
    const user = {
      id: users.length + 1,
      age,
      name,
    };
    // 불변성을 유지하기 위해 스프레드를 사용하여 새로운 배열을 만든다.
    setUsers([...users, user]);
    setName("");
    setAge("");
  };

  const clickRemoveButtonHandler = (id) => {
    const filterdUsers = users.filter((user) => user.id !== id);
    setUsers(filterdUsers);
  };
  return (
    <div>
      <div>
        이름 :&nbsp;
        <input value={name} onChange={onNameChangeHandler} />
        <br />
        나이 :&nbsp;
        <input value={age} onChange={onAgeChangeHandler} />
        <br />
        <Button clickAddButtonHandler={clickAddButtonHandler}>추가</Button>
      </div>
      <div className="app-style">
        {users.map((item) => {
          return (
            <UserItem
              key={item.id}
              item={item}
              clickRemoveButtonHandler={clickRemoveButtonHandler}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
