export const initialState = {
  name: "Kushal",
  age: 22,
};

export type actionTypes =
  | {
      type: "CHANGE_NAME";
      payload: string;
    }
  | {
      type: "UPADATE_AGE";
      payload: number;
    };

export const reducer = (state: typeof initialState, action: actionTypes) => {
  if (action.type === "CHANGE_NAME") {
    return {
      ...state,
      name: action.payload,
    };
  } else if (action.type === "UPADATE_AGE") {
    return {
      ...state,
      age: action.payload,
    };
  } else {
    return state;
  }
};
