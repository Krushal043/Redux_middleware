import { useState, useRef } from "react";

export default function Demo() {
    const [name, setName] = useState({
      fname: "",
      email: "",
      number: 0,
      age: 5,
    });

    const useAge = useRef();

    const handlerSubmit = (e) => {
      e.preventDefault();
      console.log(name);
      // console.log("age", useAge.current.value);
      setName({ ...name, age: useAge.current.value });
    };

    const submitChange = (e) => {
      setName({ ...name, [e.target.name]: e.target.value });
    };

    return (
      <div>
        <form onSubmit={handlerSubmit}>
          <div>
            <input
              type="text"
              name="fname"
              value={name.fname}
              onChange={submitChange}
            />
            <input
              type="email"
              name="email"
              value={name.email}
              onChange={submitChange}
            />
            <input
              type="number"
              name="number"
              value={name.number}
              onChange={submitChange}
            />
            <input type="number" name="age" ref={useAge} />
            <button type="submit">Submit</button>
          </div>
        </form>
        <div>
          {name.fname}
          <br />
          {name.email}
          <br />
          {name.number}
          <br />
          {name.age}
          <br />
        </div>
      </div>
  );
}
