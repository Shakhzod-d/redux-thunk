import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./Store/Thunk";

function App() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(store);
  const testFunc = () => {
    dispatch(fetchUsers());
  };

  return (
    <div className="container">
      hello from app
      <button onClick={testFunc}>fetch users</button>
      <div>
        {store.users.users.map((item) => {
          const { id, name, username, email, phone } = item;
          return (
            <div key={id}>
              <span>name: {name}</span> <span>username {username}</span>{" "}
              <span> Email: {email}</span> <span>phone {phone}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
