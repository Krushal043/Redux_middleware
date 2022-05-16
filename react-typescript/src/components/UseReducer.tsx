import React, { useContext } from "react";
import { UserCtontext } from "../App";

const UseReducer = () => {
  const { state, dispatch } = useContext(UserCtontext);
  return (
    <div>
      <h2>Name:{state.name}</h2>
      <h2>Age:{state.age}</h2>
      <button
        onClick={() => {
          dispatch({ type: "CHANGE_NAME", payload: "Zalak" });
        }}
      >
        Upadate Name
      </button>
      <button
        onClick={() => {
          dispatch({ type: "UPADATE_AGE", payload: 21 });
        }}
      >
        Upadate Age
      </button>
    </div>
  );
};

export default UseReducer;
