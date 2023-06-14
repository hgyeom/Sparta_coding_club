const UserItem = ({ item, clickRemoveButtonHandler }) => {
  return (
    <div key={item.id} className="component-style">
      {item.name} - {item.age}
      <button onClick={() => clickRemoveButtonHandler(item.id)}>X</button>
    </div>
  );
};

export default UserItem;
