import { useState } from "react";

const User = ({ name, location, contact }) => {
  const [counter, setCounter] = useState(1);
  const [counter2] = useState(5);

  const btnClick = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="user-info">
      <h1>counter:{counter}</h1> <button onClick={btnClick}>Increment</button>
      <h1>Counter2:{counter2}</h1>
      <h3>Name:{name}</h3>
      <h4>Location:{location}</h4>
      <p>{contact}</p>
    </div>
  );
};

export default User;
