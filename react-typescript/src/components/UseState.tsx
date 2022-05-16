import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todolist, setTodoList] = useState<string[]>([]);

  const addtodo = () => {
    setTodoList([...todolist, todo]);
    setTodo("");
  };

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={todo}
        onChange={handleChange}
      />
      <button onClick={addtodo}>Add Todo</button>
      <ul>
        {todolist.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Todo;
