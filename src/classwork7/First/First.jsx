import React, { useState } from "react";

export const FirstComponent = ({
  counterTwo,
  increment,
  decrement,
  plus,
  minus,
}) => {
  const [input1, setInput] = useState();

  const onChange = (evt) => {
    setInput(+evt.target.value);
  };

  return (
    <div>
      <input type="number" value={input1} onChange={onChange} />
      <button onClick={increment}>Inc</button>
      {counterTwo}
      <button onClick={decrement}>Dec</button>
      <button onClick={() => plus(input1)}>+</button>
      <button onClick={() => minus(input1)}>-</button>
    </div>
  );
};
