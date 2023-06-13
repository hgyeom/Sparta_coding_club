import "App.css";

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
  const user = [
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ];
  return (
    <div className="app-style">
      {user.map((item) => {
        return (
          <div key={item.id} className="component-style">
            {item.name} - {item.age}
          </div>
        );
      })}
    </div>
  );
}

export default App;
