import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "./components/Header/User";
import { userActions } from "./redux/actions/userAction";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, users, error } = userList;
  useEffect(() => {
    dispatch(userActions);
  }, [dispatch]);
  return (
    <div className="App">
      <h1>Redux-Thunk</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <User user={users} />
      )}
    </div>
  );
}

export default App;
