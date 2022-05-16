import React, { useReducer, createContext } from "react";
import "./App.css";
import Profile from "./components/Profile";
import UseState from "./components/UseState";
import UseRef from "./components/UseRef";
import UseReducer from "./components/UseReducer";
import { reducer, initialState, actionTypes } from "./reducer";

type contexttype = {
  state: typeof initialState;
  
  dispatch: React.Dispatch<actionTypes>;
};

export const UserCtontext = createContext({} as contexttype);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Props</h1>
      <Profile name="Kushal" age={20} />
      <Profile name="Riki" age={22} status="Single" />
      <Profile name="Nik" age={21} status="Half Marride" />
      <br />
      <h1>useState</h1>
      <UseState />
      <br />
      <h1>useRef</h1>
      <UseRef />
      <br />
      <h1>Context,useContext,useReducer</h1>
      <UserCtontext.Provider value={{ state, dispatch }}>
        <UseReducer />
      </UserCtontext.Provider>
    </div>
  );
}

export default App;
