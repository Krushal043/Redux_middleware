import React, { useState, useRef } from "react";

const UseRef = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [todolist, setTodoList] = useState<string[]>([]);

  const addtodo = () => {
    if (inputRef.current) {
      const todo = inputRef.current.value;
      setTodoList([...todolist, todo]);
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter your name" />
      <button onClick={addtodo}>Add Todo</button>
      <ul>
        {todolist.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default UseRef;
